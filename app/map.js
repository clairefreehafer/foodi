/** map styling JSON */
const mapStyles = [
	{
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#fcfcfc"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#fcfcfc"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#dddddd"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#dddddd"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#eeeeee"
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"color": "#dddddd"
		}]
	}
];

/**
 * function to create our map. this is called in RestaurantsContainer
 * when it receives props for the current location.
 */
export const initMap = (lat, lng, restaurants) => {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat, lng},
		zoom: 11,
		disableDefaultUI: true,
		styles: mapStyles
	});

	/** create map markers for each restaurant */
	restaurants.forEach(restaurant => {
		let pos = {
			lat: restaurant.geometry.location.lat(),
			lng: restaurant.geometry.location.lng()
		};

		let marker = new google.maps.Marker({
    	position: pos,
			map: map,
    	animation: google.maps.Animation.DROP,
			icon: 'http://www.googlemapsmarkers.com/v1/EA3923/'
		});
	});
}
