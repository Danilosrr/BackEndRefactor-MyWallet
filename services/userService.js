import userRepository from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { conflictError, unauthorizedError } from "../middlewares/errorsMiddleware.js";

async function signUp({ name, email }){
    const existingUsers = await userRepository.existingUsers(email);
  
    if (existingUsers.rowCount > 0) {
      throw conflictError();
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await userRepository.createUser(name, email, hashedPassword);
}

async function signIn({ email, password }){
    const { rows } = await userRepository.userInfo(email);
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw unauthorizedError();
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    return token;
}

const userService = {
    signUp,
    signIn
}
export default userService;