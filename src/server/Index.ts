import * as fs from "fs";
import * as path from "path";
import { Application } from "express";
import { createServer as createHTTPS, Server as Https, ServerOptions } from "https";
import { createServer as createHTTP, Server as Http } from "http";
import { Server } from "./Server";

const port: number = process.env.PORT || 8000;

const app: Application = Server.getInstance().app;

app.set("port", port);

function createOptions(): ServerOptions {
    return {
        cert: fs.readFileSync(path.join(__dirname, "..", "private", "cert.pem"), "utf8"),
        key: fs.readFileSync(path.join(__dirname, "..", "private", "key.pem"), "utf8")
    }
}

function createServer(): Http | Https {
    switch (process.env.NODE_ENV) {
        case "dev":
            return createHTTPS(createOptions(), app);
        default:
            return createHTTP(app);
    }
}

const server: any = createServer().listen(port, () => {
    console.log(`listening on '${port}'`);
});


