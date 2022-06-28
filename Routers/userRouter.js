import { Router } from "express";

import { changeImage } from "../Controllers/userController.js";
import validateSchema from "../Middlewares/validateSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";
import { imageSchema } from "../Schemas/profileSchema.js";

const userRouter = Router();

userRouter.put('/profile/:userId/image', validateToken, validateSchema(imageSchema), changeImage);

export default userRouter;