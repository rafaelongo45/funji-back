import bcrypt from "bcrypt";

import connection from "../config/db.js";

function createUser(user){
  const { username, email, password, profileImg } = user;
  const SALT = 10;
  const hashPassword = bcrypt.hashSync(password, SALT);

  return connection.query(`
    INSERT INTO users(username, email, password, "profileImg")
    VALUES ($1, $2, $3, $4);
  `, [username, email, hashPassword, profileImg]);
};

function createSession(userId, token){
   return connection.query(`
    INSERT INTO sessions("userId", token)
    VALUES ($1, $2);  
   `, [userId, token]);
};

const userRepository = {
  createUser,
  createSession
};

export default userRepository;
