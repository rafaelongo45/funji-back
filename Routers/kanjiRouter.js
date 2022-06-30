import { Router } from "express";
import { getKanji, getUserKanjis, postKanji, postUserKanji } from "../Controllers/kanjiController.js";

import { validateToken } from "../Middlewares/validateToken.js";

const kanjiRouter = Router();

kanjiRouter.get('/kanjis/:userId', validateToken, getUserKanjis);
kanjiRouter.post('/kanjis/:userId', validateToken, postKanji, getKanji, postUserKanji);

export default kanjiRouter;