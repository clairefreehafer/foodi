import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import { getUserLocation, store } from '../redux';

import { OverlayTrigger, Popover } from 'react-bootstrap';

const style = { width: '100px', height: '100px'}

const AnyReactComponent = ({ text }) => <div style={style}>{text}</div>;

 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng,
	restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
	getUserLocation: (lat, lng) => {
		dispatch(getUserLocation(lat, lng));
	}
});

class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

	componentDidMount () {
		// this.props.getUserLocation()
	}

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
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM',
						libraries: 'places'
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					center={currentLocation}
				>
				{/*{restaurants.length > 0 ?
					<AnyReactComponent
						lat={restaurant.}
				: null}*/}

				</GoogleMapReact>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);
