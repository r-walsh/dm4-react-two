import React from "react";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App/App";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import ShipDetail from "./components/ShipDetail/ShipDetail";

export default function Routes() {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={ App } />
			<Route path="/characters/:id" component={ CharacterDetail }>
				<Route path="/characters/:id/starships" component={ ShipDetail } />
			</Route>

			{/*<Route path="/" component={ App }>*/}
				{/*<Route path="characters" component={ CharacterDetail } />*/}
			{/*</Route>*/}
		</Router>
	);
}
