import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);
userRouter.post("/users/current", userController.get);
userRouter.patch("/users/current", userController.update);
userRouter.delete("/users/current", userController.logout);

export { userRouter };
