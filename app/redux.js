import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

/*************************************/
/********** ACTION CREATORS **********/
/*************************************/

export const getUserLocation = (lat, lng) => {
	return {
		type: 'GET_USER_LOCATION',
		location: [lat, lng]
	}
}

/*****************************/
/********** REDUCER **********/
/*****************************/

const initialState = {
	lat: 0,
	lng: 0
}

export function reducer (state = initialState, action) {
	switch (action.type) {
		case 'GET_USER_LOCATION':
			return Object.assign({}, state, {
				lat: action.location[0],
				lng: action.location[1]
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

export const store = createStore(reducer, composeEnhancers(applyMiddleware(createLogger())));
