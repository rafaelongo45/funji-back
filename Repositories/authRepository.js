
import connection from "../config/db.js";

async function createUser(user, password){
  const { username, email, profileImg } = user;
  return connection.query(`
    INSERT INTO users(username, email, password, "profileImg")
    VALUES ($1, $2, $3, $4);
  `, [username, email, password, profileImg]);
};

async function createSession(userId, token){
   return connection.query(`
    INSERT INTO sessions("userId", token)
    VALUES ($1, $2);  
   `, [userId, token]);
};

async function signout(userId, token){
  return connection.query(`
    UPDATE sessions
    SET "isValid" = false
    WHERE "userId" = $1 AND token = $2;
  `, [userId, token]);
};

async function findSession(token){
  return connection.query(`
    SELECT *
    FROM sessions
    WHERE token = $1;
  `, [token]);
};

const authRepository = {
  signout,
  createUser,
  findSession,
  createSession
};

export default authRepository;
