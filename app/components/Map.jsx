import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const style = { width: '100px', height: '100px'}

const AnyReactComponent = ({ text }) => <div style={style}>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
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
