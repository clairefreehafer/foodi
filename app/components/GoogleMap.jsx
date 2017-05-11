import React, { Component } from 'react';

const GoogleMap = props => {
	const map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
	}

	return (
		<div id="map">

		</div>
	)
}
