import express from "express";
import cors from "cors";
import { ORIGIN, ALLOW_METHODS } from "./config/env.js";

const app = express();

//? accept json req
app.use(express.json());

//? url endcoing
app.use(express.urlencoded());

//? cors
app.use(
  cors({
    origin: ORIGIN,
    methods: ALLOW_METHODS,
    credentials: true,
  })
);

//! error middleware setup
import ErrorMiddleware from "./middlewares/error.middleware.js";
app.use(ErrorMiddleware);

export default app;
