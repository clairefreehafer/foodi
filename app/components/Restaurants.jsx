import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { getRestaurants, store } from '../redux';

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

class Restaurants extends Component {
  shouldComponentUpdate (nextProps) {
    if (nextProps.lat !== this.props.lat || nextProps.lng !== this.props.lng) {
      this.props.getRestaurants(nextProps.lat, nextProps.lng)
      console.log(nextProps)
      return true;
    }
  }

  render () {
    return (
      <Card>
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
