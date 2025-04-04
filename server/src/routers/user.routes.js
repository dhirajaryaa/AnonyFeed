import {Router} from 'express';
import { userSignUp } from '../controllers/user/signup.controller.js';

export const userRouter =  Router();

// signup 
userRouter.post("/sign-up",userSignUp);