import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { cookieOptions } from "../../config/env.js";

export const logoutUser = AsyncHandler(async (req, res) => {
  // remove refresh token from the database
  const user = await User.findByIdAndUpdate(
    req?.user?._id,
    { refreshToken: "" },
    { new: true }
  );
  if (!user) {
    throw new ApiError(404, "Invalid User");
  }
  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, "User logout succussful"));
});
