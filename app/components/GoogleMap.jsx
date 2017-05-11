import React, { Component } from 'react';
import { connect } from 'react-redux';

/** function to initiate our map */
import { initMap } from '../map';

/**
 * access current latitude and longitude from the store to center
 * the map, and the array of restaurants to set the markers.
 */
 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng,
	restaurants: state.restaurants
});

class GoogleMap extends Component {
	/**
	 * when this component receives updated props from the store
	 * (only happening on page load), it will render the map with
	 * the appropriate center and markers.
	 */
	componentWillReceiveProps (nextProps) {
		initMap(nextProps.lat, nextProps.lng, nextProps.restaurants);
	}

  render() {
    return <div id="map"></div>
  }
}

export default connect(mapStateToProps)(GoogleMap);
