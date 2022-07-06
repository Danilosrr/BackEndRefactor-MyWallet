import jwt from "jsonwebtoken";
import { unauthorizedError } from "./errorsMiddleware.js";

export default function verifyToken(req, res, next){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
    throw unauthorizedError();
    }

    let user;

    try {
    user = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = user;
    } catch {
    throw unauthorizedError();
    }  
    
    next();
}