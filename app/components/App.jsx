import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import Map from './Map';
import RestaurantsContainer from './RestaurantsContainer';

import { getUserLocation, getRestaurants, store } from '../redux'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => {
    dispatch(getUserLocation())
  }
});

class App extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.getUserLocation();
	}


	render () {
		return (
			<div>
				<AppBar title="WEAREHUNGRYTOURISTS" />
				<div style={{ width: '100vw', height: '500px'}}>
					<Map />
				</div>
				<div id="restaurants">
					<RestaurantsContainer />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
