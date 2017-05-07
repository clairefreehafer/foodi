import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import { getUserLocation, store } from '../redux';
import Restaurants from './Restaurants';

const style = { width: '100px', height: '100px'}

const AnyReactComponent = ({ text }) => <div style={style}>{text}</div>;

 const mapStateToProps = state => ({
	lat: state.lat,
	lng: state.lng
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
		const currentLocation = {
			lat: this.props.lat,
			lng: this.props.lng
		};

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
					<AnyReactComponent
						lat={59.955413}
						lng={30.337844}
						text={'Kreyser Avrora'}
					/>
				</GoogleMapReact>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);
