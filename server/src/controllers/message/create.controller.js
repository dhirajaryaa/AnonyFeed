import AsyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import Message from "../../model/message.model.js";
import User from "../../model/user.model.js";
import { messageSchema } from "../../validator/messageSchema.js";
import { usernameValidter } from "../../validator/signUpSchema.js";

export const createNewMessage = AsyncHandler(async (req, res) => {
  // check for required fields
  const { content, username } = req.body;
  const { error } = messageSchema.safeParse({ content });
  if (error) {
    throw new ApiError(400, `Verfication Error: ${error.errors[0].message}`);
  }
  // check for username
  const { error: usernameError } = usernameValidter.safeParse(username);
  if (usernameError) {
    throw new ApiError(
      400,
      `Verfication Error: ${usernameError.errors[0].message}`
    );
  }
  // find user
  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(400, "User not found");
  };
  // user not accept message 
  if (!user.isMessageAccepting) {
    throw new ApiError(400, "User not accept message");
  };
  // create message
  const message = await Message.create({
    content,
    userId: user._id,
    createdAt: new Date(),
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "successfly create message", message));
});
