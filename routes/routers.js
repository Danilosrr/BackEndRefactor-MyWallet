import { Router } from "express";
import financialRouter from "./financialRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(financialRouter);

export default router;