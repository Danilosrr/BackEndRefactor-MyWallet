import cors from "cors";
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "../routes/routers.js";
import handleErrors from "../middlewares/errorsMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(handleErrors)

const port = +process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});