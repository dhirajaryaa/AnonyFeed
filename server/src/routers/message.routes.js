import {Router} from "express";
import { createNewMessage } from "../controllers/message/create.controller.js";

export const messageRouter = Router();

// create new message
messageRouter.post("/",createNewMessage)