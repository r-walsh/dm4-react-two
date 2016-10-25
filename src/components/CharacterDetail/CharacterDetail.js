import React from "react";
import { browserHistory } from "react-router";

import { getPerson, setSelectedPerson } from "../../shared/services/swapiService";

export default class CharacterDetail extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			person: {}
		}
	}

	componentWillMount() {
		getPerson( this.props.params.id )
			.then( person => {
				setSelectedPerson( person.body );
				this.setState( { person: person.body } )
			} );
	}

	showShips() {
		browserHistory.push( `/characters/${ this.props.params.id }/starships` );
	}

	render() {
		const styles = this.getStyles();
		const person = Object.keys( this.state.person ).map( key => (
			<li key={ key }>{ key }: { this.state.person[ key ] }</li>
		) );

		return (
			<div style={ styles.wrapper }>
				<div style={ styles.section }>
					<h1 style={ styles.characterName }>{ this.state.person.name }</h1>
					<button onClick={ this.showShips.bind( this ) }>Get Starships</button>
					<ul>
						{ person }
					</ul>
				</div>

				<div style={ styles.section }>
					{ this.props.children }
				</div>

			</div>
		);
	}

	getStyles() {
		return {
			wrapper: {
				  width: "100%"
				, display: "flex"
			}

			, section: {
				flex: 1
			}

			, characterName: {
				textDecoration: "line-through"
			}
		}
	}
}
