import {Router} from "express";
import { createNewMessage } from "../controllers/message/create.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getAllMessage } from "../controllers/message/getAllMessage.controller.js";

export const messageRouter = Router();

// create new message
messageRouter.post("/",createNewMessage)
messageRouter.get("/",verifyJWT, getAllMessage)