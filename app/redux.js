/** Redux modules to manage our store */
import { applyMiddleware, compose, createStore } from 'redux';
/** Outputs action and store updates to the console */
import { createLogger } from 'redux-logger';
/** Allows actions with side-effects */
import thunkMiddleware from 'redux-thunk';

/*************************************/
/********** ACTION CREATORS **********/
/*************************************/

/** Action creator for setting user's current location */
export const setUserLocation = (lat, lng) => ({
	type: 'SET_USER_LOCATION',
	location: [lat, lng]
});

/**
 * Action creator for getting user's current location from
 * the browser geolocation. thunk middleware allows our action
 * creators to return functions.
 */
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

/** Action creator for setting the closest restaurants */
export const setRestaurants = restaurants => ({
	type: 'SET_RESTAURANTS',
	restaurants: restaurants
});

/**
 * Action creator for requesting closest restaurants from the
 * Google Places API.
 */
export const getRestaurants = (lat, lng) => {
	return dispatch => {
		const placeService = new google.maps.places.PlacesService(document.createElement('div'));

		/** radius is in meters */
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

/** set the info for the selected restaurant, triggering the pop up */
export const setRestaurantInfo = restaurantInfo => ({
	type: 'SET_RESTAURANT_INFO',
	restaurantInfo: restaurantInfo
})

/** request more information on the selected restaurant from google */
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

/** arbitrary initial state, to prevent errors */
const initialState = {
	lat: 0,
	lng: 0,
	restaurants: [],
	restaurantInfo: null
};

/** defining our actions to update the store */
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

/** allow use of redux devtools chrome extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** create our store and apply our middleware */
export const store = createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));
