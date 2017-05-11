import React, { Component } from 'react';
/** to get our store and dispatch functions */
import { connect } from 'react-redux';

/** material-ui components */
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';

/**
 * component for our map, list of restaurants, and pop up once user
 * clicks on a restaurant
 */
import GoogleMap from './GoogleMap';
import RestaurantsContainer from './RestaurantsContainer';
import PopUp from './PopUp';

/**
 * action creators for getting user's location from the browser
 * and for setting the information for our selected restaurant.
 * this is what triggers the pop up to render on click.
 */
import { getUserLocation, setRestaurantInfo } from '../redux';

/** retrieve the info for the selected restaurant from the store */
const mapStateToProps = state => ({
	restaurantInfo: state.restaurantInfo
});

/**
 * our action creators must be mapped to our props in order
 * for information to be properly dispatched to the store
 */
const mapDispatchToProps = dispatch => ({
  getUserLocation: () => {
    dispatch(getUserLocation());
  },
	setRestaurantInfo: () => {
		dispatch(setRestaurantInfo(null));
	}
});

/** main component which renders the entire application */
class App extends Component {
	constructor (props) {
		super(props);
		this.handlePopUpClose = this.handlePopUpClose.bind(this);
	}

/** get the user's location once the App comonent has mounted */
	componentDidMount () {
		this.props.getUserLocation();
	}

/**
 * sets restaurantInfo in our store back to null,
 * triggering the pop-up to close
 */
	handlePopUpClose () {
		this.props.setRestaurantInfo();
	}

/**
 * the render function for our App component. inline styles are used to
 * override any default styles from the window or material-ui components.
 */
	render () {
		return (
			<div style={{width: '100vw'}}>

				{/* title bar */}
				<AppBar
					title="We Are Hungry Tourists"
					style={{backgroundColor: 'rgb(234, 57, 35)'}}
					iconElementLeft={<IconButton><LocalDining /></IconButton>}
				/>

				{/*
					* map component with an overlay so it is not interactive.
					* only meant to look pretty :)
				 */}
				<div id="overlay">
					<GoogleMap />
				</div>

				{/* component with the list of restaurants */}
				<div id="restaurants">
					<RestaurantsContainer />
				</div>

				{/*
					* when a restaurant is clicked, restaurantInfo will no longer be
					* null and the pop up will render. closing it sets it back to null.
				 */}
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
