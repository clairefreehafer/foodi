import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Map from './Map';

export default class App extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<AppBar title="wearehungrytourists" />
				<div style={{ width: '100vw', height: '500px'}}>
					<Map />
				</div>
			</div>
		)
	}
}
