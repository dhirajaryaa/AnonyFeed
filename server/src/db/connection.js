import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env.js";

const connectDB = async () => {
  try {
    const connectionInstent = await mongoose.connect(MONGODB_URI);
    console.log("Mongodb Connected :", connectionInstent.connection.host);
  } catch (error) {
    console.error("Database connection Error:", error);
    process.exit(1);
  }
};
export default connectDB;