import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import Message from "../../model/message.model.js";

export const getAllMessage = AsyncHandler(async (req, res) => {
  // Check if user is authenticated
  if (!req.user) {
    throw new ApiError(401, "Unauthorized User");
  }
  // get all messages for the user
  const messages = await Message.find({ userId: req.user?._id }).limit(8);

  return res
    .status(201)
    .json(new ApiResponse(201, "Fetched All Messges", messages));
});
