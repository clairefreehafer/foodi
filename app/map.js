export const initMap = (lat, lng, restaurants) => {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat, lng},
		zoom: 12
	});

	console.log('restaurants', restaurants)
}
