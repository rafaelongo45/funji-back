import { Router } from "express";

import validateSchema from "../Middlewares/validateSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";
import { signupSchema, signinSchema } from "../Schemas/authSchema.js";
import { signin, signout, signup } from "../Controllers/authController.js";
import { validateSignin, validateSignup } from "../Middlewares/validateUser.js";

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema), validateSignup, signup);
authRouter.post('/signin', validateSchema(signinSchema), validateSignin, signin);
authRouter.put('/signout/:userId', validateToken, signout);

export default authRouter;