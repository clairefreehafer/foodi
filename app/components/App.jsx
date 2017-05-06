import React, { Component } from 'react';

import Map from './Map';

export default class App extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div style={{ width: '500px', height: '500px'}}>TESTETSTSETS
				<Map />
			</div>
		)
	}
}
