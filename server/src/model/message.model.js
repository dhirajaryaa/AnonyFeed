import mongoose, { Schema } from "mongoose";

const messageSchema = Schema({
  messages: {
    type: String,
    required: [true, "Message is requried!"],
    trim: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
