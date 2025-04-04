import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { verifySchema } from "../..//validator/verifySchema.js";

export const verifyVerficationCode = AsyncHandler(async (req, res) => {
  const { code, user } = req.query;
  // validate the request verification code
  const { error } = verifySchema.safeParse({
    code: Number(code),
    username: user,
  });
  if (error) {
    throw new ApiError(
      400,
      `Validation Error: ${error.errors
        .map((err) => `${err.path} - ${err.message}`)
        .join(", ")}`
    );
  }

  // check if the user exists
  const userExits = await User.findOne({ username: user });
  if (!userExits) {
    throw new ApiError(400, "User not found");
  }

  // check code expired time
  const checkValidExpiredTime =
    new Date(userExits.verifyCodeExpiry).getTime() > Date.now();    

  if (!checkValidExpiredTime) {
    throw new ApiError(403, "Verification code expired");
  }

  //   check code valid or not
  const isCodeValid = userExits.verifyCode === Number(code);
  if (!isCodeValid) {
    throw new ApiError(403, "Verification code is not valid");
  }

  userExits.verifyCode = null;
  userExits.verifyCodeExpiry = null;
  userExits.isVerifyed = true;
  await userExits.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "verification successful"));
});
