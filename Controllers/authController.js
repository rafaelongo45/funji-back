import chalk from "chalk";

import authRepository from "../Repositories/authRepository.js";

export async function signup(req, res){
  const user = req.body;
  delete user.confirmPassword;

  try {
    await authRepository.createUser(user);
    res.sendStatus(201);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function signin(req, res){
  const { token, profileImg, userId, username } = res.locals.userInfo;
  
  try {
    await authRepository.createSession(userId, token);
    const userInfo = {
      token,
      userId, 
      username, 
      profileImg
    };

    return res.status(200).send(userInfo);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};

export async function signout(req, res){
  const { token } = res.locals;
  const { userId } = req.params;

  try {
    await authRepository.signout(userId, token);

    return res.sendStatus(200);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
}

