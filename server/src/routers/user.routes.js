import {Router} from 'express';
import { userSignUp } from '../controllers/user/signup.controller.js';
import { verifyVerficationCode } from '../controllers/user/verifyCode.controller.js';

export const userRouter =  Router();

// signup 
userRouter.post("/sign-up",userSignUp);
// verify code 
userRouter.get("/verify",verifyVerficationCode);