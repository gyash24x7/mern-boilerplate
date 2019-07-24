import ReactDOM from "react-dom";
import React from "react";
import "./scss/app.scss";
import { AppRoutes } from "./routes";
declare let module: any;

ReactDOM.render(<AppRoutes />, document.getElementById("root"));

if (module.hot && process.env.NODE_ENV === "development") {
	module.hot.accept();
}
