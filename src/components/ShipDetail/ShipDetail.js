import React from "react";

import { getShips, getSelectedPerson } from "../../shared/services/swapiService";

export default class ShipDetail extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			ships: []
		};
	}

	componentWillMount() {
		const selectedPerson = getSelectedPerson();
		getShips( selectedPerson.starships ).then( ships => this.setState( { ships } ) );
	}

	render() {
		return (
			<pre>
				{ JSON.stringify( this.state.ships ) }
			</pre>
		);
	}
}
