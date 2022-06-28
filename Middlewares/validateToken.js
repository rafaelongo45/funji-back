import chalk from "chalk";
import authRepository from "../Repositories/authRepository.js";

export async function validateToken(req, res, next){
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '').trim();

  try {
    const tokenRequest = await authRepository.findSession(token);
    const [session] = tokenRequest.rows;

    if(!session || !session.isValid){
      return res.status(401).send('Invalid Session');
    }

    res.locals.token = token;

    next();
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
}