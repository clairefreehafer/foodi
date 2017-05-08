import React, { Component } from 'react';
import { getRestaurants, store } from '../redux';
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
    dispatch(getRestaurants(lat, lng))
  }
});

class RestaurantsContainer extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.lat !== this.props.lat || nextProps.lng !== this.props.lng) {
      this.props.getRestaurants(nextProps.lat, nextProps.lng);
      return true;
    }
    return false;
  }

  render () {
    return (
			<Restaurant
				restaurants={this.props.restaurants}
			/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
