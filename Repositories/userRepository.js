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

async function getLeaderboard(){
  return connection.query(`
    SELECT u.username, u."profileImg", uk.points
    FROM users AS u
    JOIN "usersKanjis" AS uk
    ON uk."userId" = u.id
    ORDER BY uk.points DESC;
  `);
};

const userRepository = {
  getUserName,
  changeImage,
  getUserEmail,
  getLeaderboard
};

export default userRepository;