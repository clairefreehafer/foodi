import React, { Component } from 'react';

import Map from './Map';

export default class App extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount () {
		// get all tasks when component mounts
		this.getTasks();
	}

	render () {
		return (
			<Map />
		)
	}
}
