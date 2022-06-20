import { Router } from "express";

import validateSchema from "../Middlewares/validateSchema.js";
import { signin, signup } from "../Controllers/authController.js";
import { signupSchema, signinSchema } from "../Schemas/authSchema.js";
import { validateSignin, validateSignup } from "../Middlewares/validateUser.js";

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema), validateSignup, signup);
authRouter.post('/signin', validateSchema(signinSchema), validateSignin, signin);

export default authRouter;