import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';

import Map from './Map';
import RestaurantsContainer from './RestaurantsContainer';
import PopUp from './PopUp';

import { getUserLocation, getRestaurants, setRestaurantInfo, store } from '../redux'

const mapStateToProps = state => ({
	restaurantInfo: state.restaurantInfo
});

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => {
    dispatch(getUserLocation())
  },
	setRestaurantInfo: () => {
		dispatch(setRestaurantInfo(null))
	}
});

class App extends Component {
	constructor (props) {
		super(props);
		this.handlePopUpClose = this.handlePopUpClose.bind(this);
	}

	componentDidMount () {
		this.props.getUserLocation();
	}

	handlePopUpClose () {
		console.log('test')
		this.props.setRestaurantInfo();
	}

	render () {
		return (
			<div style={{width: '100vw'}}>
				<AppBar
					title="We Are Hungry Tourists"
					iconElementLeft={<IconButton><LocalDining /></IconButton>}
				/>
				<div id="map">
					<Map />
				</div>
				<div id="restaurants">
					<div id="header">Restaurants Near You</div>
					<RestaurantsContainer />
				</div>
				{this.props.restaurantInfo !== null ?
					<PopUp
						restaurantInfo={this.props.restaurantInfo}
						handlePopUpClose={this.handlePopUpClose}
					/>
				: null}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
