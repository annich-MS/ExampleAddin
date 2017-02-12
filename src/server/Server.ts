import * as express from "express";
import * as path from "path";

/**
 * The server
 *
 * @class Server
 */
export class Server {

	/**
	 * Create and return an instance of the server
	 *
	 * @returns {Server}
	 */
	public static getInstance(): Server {
		return new Server();
	}

	public app: express.Application;

	/**
	 * Creates an instance of Server.
	 */
	private constructor() {
		this.app = express();

		this.config();

		this.setApis();
	}

	/**
	 * Create REST API routes
	 */
	public setApis(): void {
		// no routes currently
	}


	public config(): void {
		// make public folder always available
		this.app.use("/public", express.static(path.join(__dirname, "..", "public")));

		this.app.use("/", this.defaultHandler);
	}

	private defaultHandler(req: express.Request, res: express.Response): void {
		res.sendFile(path.join(__dirname, "..", "/public/index.html"));
	}

}
