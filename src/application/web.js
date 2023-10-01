import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";

export const web = express();
web.use(express.json());

web.use("/api", publicRouter);
web.use("/api", userRouter);
web.get("/", (req, res) => {
  res.send("hello world");
});

web.use(errorMiddleware);
