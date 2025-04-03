import mongoose, { Schema } from "mongoose";

const messageSchema = Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
