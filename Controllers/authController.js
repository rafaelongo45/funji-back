import chalk from "chalk";

import userRepository from "../Repositories/userRepository.js";

export async function signup(req, res){
  const user = req.body;
  delete user.confirmPassword;

  try {
    await userRepository.createUser(user);
    res.sendStatus(201);
  } catch (e) {
    console.log(chalk.bold.red('Server error'), e)
    return res.sendStatus(500);
  }
};

export async function signin(req, res){
  try {
    return res.status(200);
  } catch (e) {
    console.log(chalk.bold.red('Server error'), e)
    return res.sendStatus(500);
  }
}