import { Application } from "express";
import { createServer, Server as Http } from "http";
import { Server } from "./Server";

const port: number = process.env.PORT || 8000;

const app: Application = Server.getInstance().app;

app.set("port", port);

const server: Http = createServer(app);

console.log(`listening on '${port}'`);
server.listen(port);

