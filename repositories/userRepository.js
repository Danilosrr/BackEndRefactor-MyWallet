import connection from "../src/database.js";

async function existingUsers(email){
    return connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
    );
}
async function createUser(name,email,hashedPassword){
    return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
    );
}
async function userInfo(email){
    return connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
    );
}

const userRepository = {
    existingUsers,
    createUser,
    userInfo
};

export default userRepository;