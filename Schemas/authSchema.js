import joi from "joi";

export const signupSchema = joi.object({
  username: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.ref('password'),
  profileImg: joi.string().uri().allow("")
});

export const signinSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});