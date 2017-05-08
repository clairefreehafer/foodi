import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import Map from './Map';
import RestaurantsContainer from './RestaurantsContainer';
import PopUp from './PopUp';

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
			<div style={{width: '100vw'}}>
				<AppBar title="We Are Hungry Tourists" />
				<div id="map">
					<Map />
				</div>
				<div id="restaurants">
				<div id="header">Restaurants Near You</div>
					<RestaurantsContainer />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
