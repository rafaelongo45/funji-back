import connection from "../config/db.js"

async function getUserByName(username){
  return connection.query(`
    SELECT *
    FROM users
    WHERE username = $1;
  `, [username]);
};

async function checkEmail(email){
  return connection.query(`
    SELECT *
    FROM users
    WHERE email = $1;
  `, [email]);
};

async function findSession(token){
  return connection.query(`
    SELECT *
    FROM sessions
    WHERE token = $1;
  `, [token]);
}

const authRepository = {
  findSession,
  getUserByName,
  checkEmail
};

export default authRepository;