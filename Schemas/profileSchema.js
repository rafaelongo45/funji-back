import joi from "joi";

export const imageSchema = joi.object({
  profileImg: joi.string().uri().required(),
  userId: joi.any().required()
})