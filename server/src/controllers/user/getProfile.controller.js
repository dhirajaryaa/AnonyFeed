import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { z } from "zod";


export const getUserProfile = AsyncHandler(async (req, res) => {
  const { username } = req.params;
  // check username valid or not
  const usernameSchema = z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" });
  const usernameValidation = usernameSchema.safeParse(username);
  if (!usernameValidation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Verifcation Error: Invalid username"));
  }
  // check user exist or not
  const userExist = await User.findOne({ username, isVerifyed: true });
  if (!userExist) {
    throw new ApiError(404, "User Not Found");
  }
  //  check valid user or not
  if (userExist._id === req?.user?._id) {
    throw new ApiError(
      401,
      "Unauthorized user: You cannot access this profile"
    );
  }
  //   get user data
  const loginUser = await User.findById(userExist._id).select(
    "-password -refreshToken"
  );    
  return res
    .status(200)
    .json(new ApiResponse(200, "User Profile Fetched Successfully",loginUser));
});
