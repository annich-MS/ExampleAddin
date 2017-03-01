import * as express from "express";
import * as path from "path";

const quotes: string[] = [
	"Hello World! - Every programmer ever",
	"I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve. - Bilbo Baggins",
	"Never tell me the odds. - Han Solo",
	"Korben, my man! I ain't got no fire! - Ruby Rhod",
	"Have fun stormin’ da castle. - Miracle Max",
	"If she'd 'ave kept on goin' down that way she'd 'ave gone straight to that castle. - The Worm",
	"Be excelent to each other. - Bill & Ted"
];


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

		this.setApis();

		this.config();
	}

	/**
	 * Create REST API routes
	 */
	public setApis(): void {
		this.app.get("/quote", this.quoteHandler);
	}


	public config(): void {
		// make public folder always available
		this.app.use("/public", express.static(path.join(__dirname, "..", "public")));

		this.app.use("/", this.defaultHandler);
	}

	private quoteHandler(req: express.Request, res: express.Response): void {
		res.send(quotes[Math.floor(Math.random() * 7)]);
	}

	private defaultHandler(req: express.Request, res: express.Response): void {
		res.sendFile(path.join(__dirname, "..", "/public/index.html"));
	}

}
