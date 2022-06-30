import kanjiRepository from "../Repositories/kanjiRepository.js";

export async function postKanji(req, res, next){
  const { kanji, grade } = req.body;

  try {
    await kanjiRepository.postKanji(kanji, grade);

    next();
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function postUserKanji(req, res){
  const { points } = req.body;
  const { userId } = req.params;
  const { kanjiId } = res.locals;

  try {
    await kanjiRepository.postUserKanji(userId, kanjiId, points);
    return res.sendStatus(201);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function getKanji(req, res, next){
  const { kanji } = req.body;

  try {
    const kanjiRequest = await kanjiRepository.getKanji(kanji);
    const [ dbKanji ] = kanjiRequest.rows;

    res.locals.kanjiId = dbKanji.id;

    next();
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function getUserKanjis(req, res){
  const { userId } = req.params;
  
  try {
    const kanjiRequest = await kanjiRepository.getUserKanjis(userId);
    const userKanjis = kanjiRequest.rows;
    return res.status(200).send(userKanjis);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};