import React, { Component } from 'react';
/** import our action creators for getting the restaurants */
import { getRestaurants, getRestaurantInfo } from '../redux';
import { connect } from 'react-redux';

/** restaurant dumb component to be rendered */
import Restaurant from './Restaurant';

/** material-ui components */
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * retrieve the current location and list of restaurants from the store.
 * the location is used to get the local restaurants, and the list of
 * restaurant is sent down to the Restaurant component as props.
 */
const mapStateToProps = state => ({
  lat: state.lat,
  lng: state.lng,
  restaurants: state.restaurants
})

/**
 * our getRestaurants dispatcher sends the local restaurants
 * to the store. getRestaurantInfo gets more specific information
 * for whichever restaurant the user has clicked.
 */
const mapDispatchToProps = dispatch => ({
  getRestaurants: (lat, lng) => {
    dispatch(getRestaurants(lat, lng));
  },
	getRestaurantInfo: restaurantId => {
		dispatch(getRestaurantInfo(restaurantId));
	}
});

class RestaurantsContainer extends Component {
	constructor (props) {
		super();
		this.onRestaurantClick = this.onRestaurantClick.bind(this);
	}

  /**
   * the component will re-render when the location is updated.
   * this accounts for the asyncronicity of getting a user's location.
   */
  componentWillReceiveProps (nextProps) {
    if (nextProps.lat !== this.props.lat || nextProps.lng !== this.props.lng) {
      this.props.getRestaurants(nextProps.lat, nextProps.lng);
      return true;
    }
    return false;
  }

  /**
   * when the user clicks on a restaurant, the restaurant id is dispatched
   * in order to recieve more information. this function is sent down to
   * Restaurant as props and used there.
   */
	onRestaurantClick (restaurantId) {
		this.props.getRestaurantInfo(restaurantId);
	}

  render () {
    return (
      <div>
        <Restaurant
          restaurants={this.props.restaurants}
          onRestaurantClick={this.onRestaurantClick}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
