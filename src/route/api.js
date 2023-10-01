import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);
userRouter.post("/users/current", userController.get);
userRouter.patch("/users/current/update", userController.update);

export { userRouter };
