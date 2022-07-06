import { unprocessableEntityError } from "../middlewares/errorsMiddleware.js";
import userService from "../services/userService.js";

async function signUp (req, res){
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
        throw unprocessableEntityError();
    };
  
    await userService.signUp({ name, email });

    return res.sendStatus(201);
}

async function signIn (req, res){
    const { email, password } = req.body;
  
    if (!email || !password) {
        throw unprocessableEntityError();
    };
  
    const token = await userService.signIn({ email, password });

    return res.send({ token });
}

export { signUp,signIn }