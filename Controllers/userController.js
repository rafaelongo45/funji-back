import userRepository from "../Repositories/userRepository.js";

export async function changeImage(req, res){
  const { profileImg, userId } = req.body;

  try {
    const updateRequest = await userRepository.changeImage(profileImg, userId);
    
    if(updateRequest.rowCount === 0){
      return res.status(404).send('User not found!');
    }
    
    return res.sendStatus(200);
  } catch (e) {
    console.log(chalk.bold.red(e.message));
    return res.sendStatus(500);
  }
};