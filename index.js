import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import express from "express";

import router from "./Routers/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const port = process.env.PORT || 4000;

app.listen( port,
  () => console.log(chalk.bold.green(`Server running on port: ${port}`))
);