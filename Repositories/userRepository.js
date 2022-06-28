import connection from "../config/db.js"

async function getUserName(username){
  return connection.query(`
    SELECT *
    FROM users
    WHERE username = $1;
  `, [username]);
};

async function getUserEmail(email){
  return connection.query(`
    SELECT *
    FROM users
    WHERE email = $1;
  `, [email]);
};

async function changeImage(image, userId){
  return connection.query(`
    UPDATE users
    SET "profileImg" = $1
    WHERE id = $2;
  `, [image, userId]);
};

const userRepository = {
  getUserName,
  changeImage,
  getUserEmail
};

export default userRepository;