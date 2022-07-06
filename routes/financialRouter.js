import { Router } from "express";
import { getFinancialEvents, postFinancialEvents, sumFinancialEvents } from "../controllers/financialController.js";
import handleErrors from "../middlewares/errorsMiddleware.js";
import verifyToken from "../middlewares/tokenMiddleware.js";

const financialRouter = Router();

financialRouter.post("/financial-events",verifyToken, postFinancialEvents );
financialRouter.get("/financial-events",verifyToken, getFinancialEvents );
financialRouter.get("/financial-events/sum",verifyToken, sumFinancialEvents);

export default financialRouter;