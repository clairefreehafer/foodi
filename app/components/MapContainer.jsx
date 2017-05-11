import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import { getUserLocation, store } from '../redux';

import GoogleMap from './GoogleMap';

 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng,
	restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({});

let map;

function initMap(lat, lng) {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat, lng},
		zoom: 12
	});
}

class Map extends Component {
	componentWillReceiveProps (nextProps) {
		initMap(nextProps.lat, nextProps.lng);
	}

  render() {
		const restaurants = this.props.restaurants;
		const currentLocation = {
			lat: this.props.lat,
			lng: this.props.lng
		};

		// if (restaurants.length > 0) console.log('location', restaurants[0].geometry.location.lat())

    return (
			<div>
				<GoogleMap
					restaurants={restaurants}
				/>
			</div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);
