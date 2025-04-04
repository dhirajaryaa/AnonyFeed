import {Router} from 'express';
import { userSignUp } from '../controllers/user/signup.controller.js';
import { verifyVerficationCode } from '../controllers/user/verifyCode.controller.js';
import { userLogin } from '../controllers/user/login.controller.js';

export const userRouter =  Router();

// signup 
userRouter.post("/sign-up",userSignUp);
// verify code 
userRouter.get("/verify",verifyVerficationCode);
// login
userRouter.post("/sign-in",userLogin);