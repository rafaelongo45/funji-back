import { Router } from "express";

import { changeImage, getLeaderboard } from "../Controllers/userController.js";
import validateSchema from "../Middlewares/validateSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";
import { imageSchema } from "../Schemas/profileSchema.js";

const userRouter = Router();

userRouter.get('/ranking', getLeaderboard);
userRouter.put('/profile/:userId/image', validateToken, validateSchema(imageSchema), changeImage);

export default userRouter;