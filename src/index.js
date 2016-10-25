import React from "react";
import ReactDOM from "react-dom";

import Routes from "./router";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "react-node" );

	ReactDOM.render( <Routes />, reactNode );
} );
