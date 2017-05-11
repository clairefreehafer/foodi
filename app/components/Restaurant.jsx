import React from 'react';

/** material-ui components for styling */
import { GridList, GridTile } from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';

const Restaurant = (props) => {
  const restaurants = props.restaurants;

  return (
    <div>
      {/*
        * once a list of restaurants has been received from the google maps places
        * api, the list will load. until then, the loading circle shows.
       */}
      {restaurants.length > 0 ? <h1 id="header">Restaurants Within 10km</h1> : null}
      <GridList
        cellHeight={300}
        style={{ width: '100%' }}
        id="grid-list"
      >
        {restaurants.length > 0 ? restaurants.map(restaurant => {
          {/* render each restaurant name, address, and star rating */}
          return (
            <GridTile
              key={restaurant.id}
              title={restaurant.name}
              subtitle={restaurant.vicinity}
              actionIcon={<div className="rating">
                <FontIcon className="material-icons" color="white">star</FontIcon>&nbsp;
                <span className="rating-number">
                  {restaurant.rating.toFixed(1)}
                </span>
              </div>}
              onClick={() => props.onRestaurantClick(restaurant.place_id)}
            >
              {/*
                * if the restaurant has no photos associated with it,
                * we render a placeholder.
              */}
              {restaurant.photos ?
                <img src={restaurant.photos[0].getUrl({maxWidth: 500, maxHeight: 500})} />
              : <img src="/no-image.png" />}
            </GridTile>
          )
        })

        : <CircularProgress color={'rgb(234, 57, 35)'} size={100} thickness={10} id="progress" />}
      </GridList>
    </div>
  )
}

export default Restaurant;
