import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../components/home";

export class AppRoutes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
				</Switch>
			</BrowserRouter>
		);
	}
}
