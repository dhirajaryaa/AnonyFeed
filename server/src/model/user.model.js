import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: [true, "Username is requried!"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is requried!"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please Enter valid Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is requried!"]
  },
  isVerifyed: {
    type: Boolean,
    default: false,
  },
  verifyCode: {
    type: Number,
  },
  verifyCodeExpiry: {
    type: Date,
  },
  isMessageAccepting: {
    type: Boolean,
    default: true,
  },
  messages: {
    type: mongoose.Types.ObjectId,
    ref: "Message",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
