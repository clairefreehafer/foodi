import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { getUserLocation, store } from '../redux';

const style = { width: '100px', height: '100px'}

const AnyReactComponent = ({ text }) => <div style={style}>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

	componentDidMount () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				store.dispatch(getUserLocation(position.coords.latitude, position.coords.longitude))
			})
		}
	}

  render() {
    return (
      <GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
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
