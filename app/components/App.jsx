import React, { Component } from 'react';
import Promise from 'bluebird';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import Map from './Map';
import Restaurants from './Restaurants';

import { getUserLocation, getRestaurants, store } from '../redux'

const mapStateToProps = state => ({
  lat: state.lat,
  lng: state.lng,
  restaurants: state.restaurants
})

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => {
    dispatch(getUserLocation())
  },
	getRestaurants: (lat, lng) => {
		dispatch(getRestaurants(lat, lng))
	}
});

class App extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.getUserLocation()
	}

	componentDidUpdate () {
	}

	render () {
		return (
			<div>
				<AppBar title="WEAREHUNGRYTOURISTS" />
				<div style={{ width: '100vw', height: '500px'}}>
					<Map />
				</div>
				<div id="restaurants">
					<Restaurants />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

connect(mapStateToProps, mapDispatchToProps)(Restaurants);
