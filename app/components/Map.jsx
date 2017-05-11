import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import { getUserLocation, store } from '../redux';

import { OverlayTrigger, Popover } from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';

 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng,
	restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({});

class Map extends Component {
	getUserLocation () {
		const location = navigator.geolocation;

		if (location) {
			location.getCurrentPosition(position => {
				this.props.setUserLocation(position.coords.latitude, position.coords.longitude);
			})
		}
	}

  render() {
		const restaurants = this.props.restaurants;
		const currentLocation = {
			lat: this.props.lat,
			lng: this.props.lng
		};

		if (restaurants.length > 0) console.log('location', restaurants[0].geometry.location.lat())

    return (
			<div id="overlay">
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM',
						libraries: 'places'
					}}
					defaultCenter={{lat: 0, lng: 0}}
					defaultZoom={12}
					center={currentLocation}
				>
				{restaurants.length > 0 ? restaurants.map(restaurant => (
					<FontIcon
						className="material-icons"
						lat={restaurant.geometry.location.lat()}
						lng={restaurant.geometry.location.lng()}
						zIndex={1}
					>place</FontIcon>))
				: null}

				</GoogleMapReact>
			</div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);
