import * as fs from "fs";
import * as path from "path";
import { Application } from "express";
import { createServer, Server as Http, ServerOptions } from "https";
import { Server } from "./Server";

const port: number = process.env.PORT || 8000;

const app: Application = Server.getInstance().app;

app.set("port", port);

function createOptions(): ServerOptions {
    switch (process.env.NODE_ENV) {
        case "dev":
            return {
                cert:  fs.readFileSync(path.join(__dirname, "..", "private", "cert.pem"), "utf8"),
                key:  fs.readFileSync(path.join(__dirname, "..", "private", "key.pem"), "utf8") 
            };
        default:
            return {};
    }
}

console.log(process.env.NODE_ENV);
const server: Http = createServer(createOptions(), app);

console.log(`listening on '${port}'`);
server.listen(port);

