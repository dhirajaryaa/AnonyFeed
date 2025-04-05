import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/env.js";

export const verifyJWT = AsyncHandler(async (req, res, next) => {
  // get incommingToken from cookies or headers
  const incommingToken =
    req.cookies.accessToken ||
    req.headers.authorization?.replace("Bearer ", "");
  if (!incommingToken) {
    throw new ApiError(400, "Aunthorized, No Token Provided");
  }
  //   decodeToken
  const decodedToken = await jwt.verify(incommingToken, ACCESS_TOKEN_SECRET);
  if (!decodedToken) {
    throw new ApiError(401, "Unauthorized, Invalid Token");
  }
  // check if the token is expired
  const isExpired = decodedToken.exp < Date.now() / 1000;
  if (isExpired) {
    throw new ApiError(403, "Unauthorized, Token Expired");
  }
  
  req.user = decodedToken;
  next();
});
