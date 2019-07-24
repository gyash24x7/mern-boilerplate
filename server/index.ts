import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cors from "cors";

const app = express();

app.use(
	bodyParser.urlencoded({
		limit: "50mb",
		extended: true,
		parameterLimit: 500000
	})
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client", "build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
	});
}

app.listen(process.env.PORT || 8000, () => {
	console.log("Server is Up @", process.env.PORT || 8000);
});
