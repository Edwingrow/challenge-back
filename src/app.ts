import { Enviroment } from "./config/constants/Enviroments";
import { Server } from "./config/server/server";

Enviroment.initEnvironments()
const server : Server = new Server()
server.run()