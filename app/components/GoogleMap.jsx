import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initMap } from '../map';

 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng,
	restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({});

class GoogleMap extends Component {
	componentWillReceiveProps (nextProps) {
		initMap(nextProps.lat, nextProps.lng, nextProps.restaurants);
	}

  render() {
    return <div id="map"></div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
