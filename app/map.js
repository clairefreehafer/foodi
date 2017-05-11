export const initMap = (lat, lng, restaurants) => {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat, lng},
		zoom: 11,
		disableDefaultUI: true
	});

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
