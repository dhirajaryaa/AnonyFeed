import express from "express";
import cors from "cors";
import { ORIGIN, ALLOW_METHODS } from "./config/env.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(
  cors({
    origin: ORIGIN,
    methods: ALLOW_METHODS,
    credentials: true,
  })
);

export default app;
