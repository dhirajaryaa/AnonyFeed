import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { signInSchema } from "../..//validator/signInSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "../../config/env.js";
import { cookieOptions } from "../../config/env.js";

//! Generate Access and Refresh Token
export const generateToken = async (user) => {
  if (!user) return null;
  const generateAccessToken = await jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );
  const generateRefreshToken = await jwt.sign(
    {
      _id: user._id,
    },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
  if (!generateAccessToken || !generateRefreshToken) {
    throw new ApiError(500, "Error generating tokens");
  }
  user.refreshToken = generateRefreshToken;
  await user.save({ validateBeforeSave: false });
  return {
    accessToken: generateAccessToken,
    refreshToken: generateRefreshToken,
  };
};
//! User Login
export const userLogin = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  // user input validation
  const { error } = signInSchema.safeParse({
    identifier: username || email,
    password,
  });

  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.errors
        .map((err) => `${err.path} - ${err.message}`)
        .join(", ")}`
    );
  }
  // check if user exists or not
  const userExist = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (!userExist) {
    throw new ApiError(401, "Invalid credentials");
  }
  // check if password is correct
  const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Password");
  }
  // generate token
  const { accessToken, refreshToken } = await generateToken(userExist);

  const user = await User.findById(userExist._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(200, "Login Success", { user, accessToken, refreshToken })
    );
});
