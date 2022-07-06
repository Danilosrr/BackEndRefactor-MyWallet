import { Router } from "express";
import { signUp,signIn } from "../controllers/userController.js";
import handleErrors from "../middlewares/errorsMiddleware.js";

const userRouter = Router();

userRouter.post("/sign-up", signUp);
userRouter.post("/sign-in", signIn);

export default userRouter;