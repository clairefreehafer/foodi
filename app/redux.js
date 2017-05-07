import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

/*************************************/
/********** ACTION CREATORS **********/
/*************************************/

// push user's location to the store
export const setUserLocation = (lat, lng) => {
	return {
		type: 'SET_USER_LOCATION',
		location: [lat, lng]
	}
}

export const getUserLocation = () => {
	const location = navigator.geolocation;

	return dispatch => {
		if (location) {
			location.getCurrentPosition(position => {
				console.log(position)
				dispatch(setUserLocation(position.coords.latitude, position.coords.longitude))
			})
		}
	}
}

export const setRestaurants = restaurants => {
	return {
		type: 'SET_RESTAURANTS',
		restaurants: restaurants
	}
}

export const getRestaurants = (lat, lng) => {
	return dispatch => {
		const service = new google.maps.places.PlacesService(document.createElement('div'));

		const request = {
			location: new google.maps.LatLng(lat, lng),
			radius: 10000,
			type: ['restaurant']
		};

		service.nearbySearch(request, restaurants => {
			dispatch(setRestaurants(restaurants));
		})
	}
}

/*****************************/
/********** REDUCER **********/
/*****************************/

const initialState = {
	lat: 0,
	lng: 0,
	restaurants: []
}

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
