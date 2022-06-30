import connection from "../config/db.js";

async function postKanji(kanji, grade){
  return connection.query(`
    INSERT INTO kanjis(kanji, grade)
    VALUES($1, $2);
  `, [kanji, grade]);
};

async function getUserKanjis(userId){
  return connection.query(`
    SELECT * 
    FROM kanjis AS k
    LEFT JOIN "usersKanjis" AS uk
    ON k.id = uk."kanjiId"
    WHERE uk."userId" = $1;
  `, [userId]);
};

async function getKanji(kanji){
  return connection.query(`
    SELECT *
    FROM kanjis AS k
    WHERE kanji = $1;
  `, [kanji]);
}

async function postUserKanji(userId, kanjiId, points){
  return connection.query(`
    INSERT INTO usersKanjis("userId", "kanjiId", points)
    VALUES($1, $2, $3);
  `, [userId, kanjiId, points]);
};

const kanjisRepository = {
  getKanji,
  postKanji,
  postUserKanji,
  getUserKanjis
};

export default kanjisRepository;