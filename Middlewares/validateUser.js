import chalk from "chalk";
import bcrypt from "bcrypt";
import { v4 as uuid} from "uuid";

import userRepository from "../Repositories/userRepository.js";

export async function validateSignup(req, res, next){
  const { email } = req.body;

  try {
    const userRequest = await userRepository.getUserEmail(email);
    const [user] = userRequest.rows;
    
    if(user){
      return res.status(409).send('User already registered');
    };
    
    next();
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function validateSignin(req, res, next){
  const { email, password } = req.body;

  try {
    const userRequest = await userRepository.getUserEmail(email);
    const [user] = userRequest.rows;
    console.log(user)
    if(!user){
      return res.status(404).send("User doesn't exist!");
    }

    const hashPassword = user.password;
    const validPassword = bcrypt.compareSync(password, hashPassword);
    delete user.password;

    if(!validPassword){
      return res.status(401).send('Incorrect password!')
    }

    const token = uuid();

    const userInfo = {
      userId: user.id,
      token: token,
      username: user.username,
      profileImg: user.profileImg
    }

    res.locals.userInfo = userInfo;

    next();
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};