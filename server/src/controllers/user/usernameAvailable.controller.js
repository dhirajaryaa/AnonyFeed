import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import User from "../../model/user.model.js";
import { usernameValidter } from "../..//validator/signUpSchema.js";

export const checkUsernameAvailable = AsyncHandler(async (req, res) => {
  const { username } = req.query;  
  // Validate the username
  const { error } = usernameValidter.safeParse(username || "");
  if (error) {
    throw new ApiError(
        400,
        `Validation Error: ${error.errors
          .map((err) => `${err.path} - ${err.message}`)
          .join(", ")}`
      );
  };
  // Check if the username is already taken
  const user = await User.findOne({ username });
  if (user) {
    throw new ApiError(409, "Username is already taken");
  };

  // If the username is available, send a success response
  return res.status(200).json(new ApiResponse(200, "Username is available"));
});
