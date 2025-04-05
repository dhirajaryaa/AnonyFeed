import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

export const {
  MONGODB_URI,
  PORT,
  ORIGIN,
  ALLOW_METHODS,
  RESEND_API_KEY,
  BASE_URL,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} = process.env;
