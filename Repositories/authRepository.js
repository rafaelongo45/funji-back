import connection from "../config/db.js"

function getUserByName(username){
  return connection.query(`
    SELECT *
    FROM users
    WHERE username = $1;
  `, [username]);
};

function getUserByEmail(email){
  return connection.query(`
    SELECT *
    FROM users
    WHERE email = $1;
  `, [email]);
};

const authRepository = {
  getUserByName,
  getUserByEmail
};

export default authRepository;