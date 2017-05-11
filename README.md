# WE ARE HUNGRY TOURISTS

## About

We Are Hungry Tourists (WAHT) is a simple web-based app that gives you a list of restaurants closest to you. It provides star rating, user reviews, and whether it's open now or not in order to help mitigate your decision. Once you've eaten, you can leave a review to help future tourists make their own eating decisions.

## Technology

WAHT was built using the robust **Google Maps** and **Google Places** API. This service provides the most up-to-date information as well as a way for users to leave reviews that will reach an audience scope beyond this app, possibly even to the restaurant owners themselves.

**Express.js** is used for basic routing and running the app server. On the front end **React** and **Redux** are working in tandem to provide a moduler and responsive user experience. **Webpack** packages this all up neatly for the browser environment. The **Material-UI** React library was used for styling.

## How to Use

1. ```npm install``` or ```yarn install``` from the root directory to install all dependencies.
2. Navigate to ```localhost:1337``` in your browser of choice and enjoy!

## Deployment

We Are Hungry Tourists would be deployed using Heroku, which allows the app to be pushed to a directory as one would push it to GitHub or a similar service – simple! Heroku also provides numerous add-ons to help with things such as continual integration.

## Documentation

The code has been extensively commented in order to provide an easy read. In addition, here is a brief summary of the app's structure.

1. ```index.js``` in our root directory is responsible for running the server and serving static files, such as ```index.html```, ```style.css```, and ```bundle.js```.
2. ```app/main.jsx``` is the root file for the React components. It implements React Dom, React Router, the Material UI theme, and the Provider for the Redux store.
3. ```app/redux.js``` is where the Redux actions, action creators, reducer, and store live. They are exported and used throughout the components to keep the app accurate and up to date.
4. ```app/component/App.jsx``` is the main React component, rendering our map, restaurant, and pop up components. It is also responsible for getting and setting the user's current location.
5. ```app/component/GoogleMap.jsx``` is the map (surprise!). It is non-interactive and only meant to display the location of all the restaurants that are returned. It's intended for decoration only.
6. ```app/map.js``` is where the function to initiate the map lives and is exported from. It includes some styling JSON as well.
7. ```app/component/RestaurantContainer.jsx``` takes care of getting information for the local restaurants, which it then passes down to the ```Restaurant``` dumb component. It also updates the current selected restaurant for displaying the pop up.
8. ```app/component/Restaurant.jsx``` renders the list of restaurants. Before the list has been received from Google, it displays a loading sign.
9. ```app/component/PopUp.jsx``` renders when the user clicks on a restaurant in the list. It shows more information about that selected restaurant including it's location on a map, if it is currently open, its address, its phone number, and user reviews. There is also a link to leave a review through Google.
