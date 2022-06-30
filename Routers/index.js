import { Router } from "express";

import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import kanjiRouter from "./kanjiRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(kanjiRouter);

export default router;