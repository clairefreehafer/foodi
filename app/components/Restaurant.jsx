import React from 'react';

import PopUp from './PopUp'

import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';

const Restaurant = (props) => {
  const restaurants = props.restaurants;

  return (
    <div>
      <PageHeader>Restaurants Near You</PageHeader>

    <GridList
      cellHeight={300}
      style={{ width: '100%' }}
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
                {restaurant.rating}
              </span>
            </div>}
          >
          {/* put in contingency for no photos */}
            <img src={restaurant.photos[0].getUrl({maxWidth: 300, maxHeight: 300})} />
          </GridTile>
        )
      })
      : <CircularProgress size={100} thickness={10} />}
    </GridList>
    </div>
  )
}

export default Restaurant;
