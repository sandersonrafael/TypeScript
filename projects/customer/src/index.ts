import { App } from "./app";
import dotenv from "dotenv";

dotenv.config();

const serverPort = process.env.SERVER_PORT;

new App().getServer().listen(serverPort);
