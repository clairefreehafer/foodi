import React from 'react';

import PopUp from './PopUp'

import { GridList, GridTile } from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';

const Restaurant = (props) => {
  const restaurants = props.restaurants;

  return (
    <GridList
      cellHeight={300}
      style={{ width: '100%' }}
      id="grid-list"
    >
      {restaurants.length > 0 ? restaurants.map(restaurant => {
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

            {restaurant.photos ? <img src={restaurant.photos[0].getUrl({maxWidth: 500, maxHeight: 500})} />
            : <img src="/no-image.png" />}
          </GridTile>
        )
      })
      : <CircularProgress color={'rgb(234, 57, 35)'} size={100} thickness={10} id="progress" />}
    </GridList>
  )
}

export default Restaurant;
