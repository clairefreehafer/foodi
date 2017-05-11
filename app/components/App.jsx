import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';

import MapContainer from './MapContainer';
import RestaurantsContainer from './RestaurantsContainer';
import PopUp from './PopUp';

import { getUserLocation, setRestaurantInfo } from '../redux';

const mapStateToProps = state => ({
	restaurantInfo: state.restaurantInfo
});

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => {
    dispatch(getUserLocation());
  },
	setRestaurantInfo: () => {
		dispatch(setRestaurantInfo(null));
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
		this.props.setRestaurantInfo();
	}

	render () {
		return (
			<div style={{width: '100vw'}}>
				<AppBar
					title="We Are Hungry Tourists"
					style={{backgroundColor: 'rgb(234, 57, 35)'}}
					iconElementLeft={<IconButton><LocalDining /></IconButton>}
				/>
				<div id="map">
					<MapContainer />
				</div>
				<div id="restaurants">
					<h1 id="header">Restaurants Within 10km</h1>
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
