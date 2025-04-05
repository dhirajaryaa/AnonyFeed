import { Router } from "express";
import { userSignUp } from "../controllers/user/signup.controller.js";
import { verifyVerficationCode } from "../controllers/user/verifyCode.controller.js";
import { userLogin } from "../controllers/user/login.controller.js";
import { getUserProfile } from "../controllers/user/getProfile.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshUserToken } from "../controllers/user/tokenRefresh.controller.js";
import { logoutUser } from "../controllers/user/logout.controller.js";
import { checkUsernameAvailable } from "../controllers/user/usernameAvailable.controller.js";

export const userRouter = Router();

// signup
userRouter.post("/sign-up", userSignUp);
// check username
userRouter.get("/username", checkUsernameAvailable);
// verify code
userRouter.get("/verify", verifyVerficationCode);
// login
userRouter.post("/sign-in", userLogin);
// refresh token
userRouter.get("/refresh", refreshUserToken);

//! Protected Routes
// get user profile
userRouter.get("/:username", verifyJWT, getUserProfile);
// logout user
userRouter.post("/sign-out", verifyJWT, logoutUser);
