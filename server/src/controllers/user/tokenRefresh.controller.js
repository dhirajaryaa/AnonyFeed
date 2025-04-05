import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { REFRESH_TOKEN_SECRET } from "../../config/env.js";
import { cookieOptions } from "../../config/env.js";
import jwt from "jsonwebtoken";
import { generateToken } from "./login.controller.js";

export const refreshUserToken = AsyncHandler(async (req, res) => {
  // get refresh token from request
  const incommingToken = req.cookies.refreshToken;
  if (!incommingToken) {
    throw new ApiError(400, "Unauthorized user");
  }
  //   decode token
  const decodedToken = await jwt.decode(incommingToken, REFRESH_TOKEN_SECRET);
  if (!decodedToken) {
    throw new ApiError(401, "Invalid token");
  }
  //   get user from db
  const user = await User.findById(decodedToken?._id);
  if (!user) {
    throw new ApiError(400, "Invalid user");
  }
  const { accessToken, refreshToken } = await generateToken(user);

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(200, "Token Refreshed!", {
        accessToken,
        refreshToken,
      })
    );
});
