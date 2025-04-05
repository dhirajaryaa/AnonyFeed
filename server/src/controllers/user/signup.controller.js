import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { signUpSchema } from "../..//validator/signUpSchema.js";
import { sendVerifycationEmail } from "../../services/resend.service.js";
import bcrypt from "bcryptjs";
import {BASE_URL} from "../../config/env.js"

export const userSignUp = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  // TODO: validate the request body
  const { error } = signUpSchema.safeParse({ username, email, password });
  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.errors
        .map((err) => `${err.path} - ${err.message}`)
        .join(", ")}`
    );
  }
  // TODO: check username available or not
  const existingUserByUsername = await User.findOne({
    username,
    isVerifyed: true,
  });
  if (existingUserByUsername) {
    throw new ApiError(400, "Username already taken");
  }
  // TODO: check email exist user
  const existingUserByEmail = await User.findOne({
    email,
  });
  // TODO: generate verification code 6 digit
  const verifyCode = Math.floor(100000 + Math.random() * 900000);
  // TODO:  hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  if (existingUserByEmail) {
    if (existingUserByEmail.isVerifyed) {
      throw new ApiError(400, "User already exist with this email");
    } else {
      existingUserByEmail.password = hashedPassword;
      existingUserByEmail.verifyCode = verifyCode;
      existingUserByEmail.verifyCodeExpiry = Date.now() + 10 * 60 * 1000;

      await existingUserByEmail.save();
    }
  } else {
    // TODO: save new user
    await User.create({
      username,
      email,
      password: hashedPassword,
      verifyCode,
      verifyCodeExpiry: Date.now() + 10 * 60 * 1000,
      createdAt: Date.now(),
      message: [],
    });
  }

  // TODO: send verification email
  await sendVerifycationEmail(email, verifyCode, username,BASE_URL);

  return res
    .status(200)
    .json(
      new ApiResponse(201, "user signup successful please verify email", null)
    );
});
