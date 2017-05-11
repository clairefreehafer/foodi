import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

/*************************************/
/********** ACTION CREATORS **********/
/*************************************/

// push user's location to the store
export const setUserLocation = (lat, lng) => ({
	type: 'SET_USER_LOCATION',
	location: [lat, lng]
});

export const getUserLocation = () => {
	const location = navigator.geolocation;

	return dispatch => {
		if (location) {
			location.getCurrentPosition(position => {
				dispatch(setUserLocation(position.coords.latitude, position.coords.longitude));
			});
		} else {
			dispatch(setUserLocation('error'));
		}
	};
};

// set closest restaurants
export const setRestaurants = restaurants => ({
	type: 'SET_RESTAURANTS',
	restaurants: restaurants
});

export const getRestaurants = (lat, lng) => {
	return dispatch => {
		const placeService = new google.maps.places.PlacesService(document.createElement('div'));

		const request = {
			location: new google.maps.LatLng(lat, lng),
			radius: 10000,
			type: ['restaurant']
		};

		placeService.nearbySearch(request, restaurants => {
			dispatch(setRestaurants(restaurants));
		});
	};
}

// create restaurant popup
export const setRestaurantInfo = restaurantInfo => ({
	type: 'SET_RESTAURANT_INFO',
	restaurantInfo: restaurantInfo
})

export const getRestaurantInfo = restaurantId => {
	return dispatch => {
		const infoService = new google.maps.places.PlacesService(document.createElement('div'));

		const infoRequest = {
			placeId: restaurantId
		};

		infoService.getDetails(infoRequest, (restaurantInfo, status) => {
			dispatch(setRestaurantInfo(restaurantInfo));
		})
	}
}

/*****************************/
/********** REDUCER **********/
/*****************************/

const initialState = {
	lat: 0,
	lng: 0,
	restaurants: [],
	restaurantInfo: null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_LOCATION':
			return Object.assign({}, state, {
				lat: action.location[0],
				lng: action.location[1]
			});

		case 'SET_RESTAURANTS':
			return Object.assign({}, state, {
				restaurants: action.restaurants
			});

		case 'SET_RESTAURANT_INFO':
			return Object.assign({}, state, {
				restaurantInfo: action.restaurantInfo
			});

		default:
			return state;
	}
}

/***************************/
/********** STORE **********/
/***************************/

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));
