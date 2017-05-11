import React, { Component } from 'react';
import { getRestaurants, getRestaurantInfo, store } from '../redux';
import { connect } from 'react-redux';

import Restaurant from './Restaurant';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const mapStateToProps = state => ({
  lat: state.lat,
  lng: state.lng,
  restaurants: state.restaurants
})

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

  componentWillReceiveProps (nextProps) {
    if (nextProps.lat !== this.props.lat || nextProps.lng !== this.props.lng) {
      this.props.getRestaurants(nextProps.lat, nextProps.lng);
      return true;
    }
    return false;
  }

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
