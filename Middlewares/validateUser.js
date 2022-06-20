import chalk from "chalk";
import bcrypt from "bcrypt";
import { v4 as uuidv4} from "uuid";

import authRepository from "../Repositories/authRepository.js";

export async function validateSignup(req, res, next){
  const { email } = req.body;

  try {
    const userRequest = await authRepository.getUserByEmail(email);
    const [user] = userRequest.rows;
    
    if(user){
      return res.status(409).send('User already registered');
    }

    next();
  } catch (e) {
    console.log(chalk.bold.red('Server error'), e);
    return res.sendStatus(500);
  }
};

export async function validateSignin(req, res, next){
  const { email, password } = req.body;

  try {
    const userRequest = await authRepository.getUserByEmail(email);
    const [user] = userRequest.rows;
    const hashPassword = user.password;
    const validPassword = bcrypt.compareSync(password, hashPassword);

    if(!user){
      return res.status(404).send("Email doesn't exist!");
    }

    if(!validPassword){
      return res.status(401).send('Check your credentials!')
    }

    next();
  } catch (e) {
    console.log(chalk.bold.red('Server error'), e);
    return res.sendStatus(500);
  }
};