import React from 'react';

import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Restaurant = (props) => {
  const restaurants = props.restaurants;

  return (
    <div>
      <PageHeader>Restaurants Near You</PageHeader>

      {/*<ListGroup>
        {restaurants.length > 0 ? restaurants.map(restaurant => (
          <ListGroupItem key={restaurant.id} header={restaurant.name}>
            {restaurant.vicinity}
            <img src={restaurant.photos[0].getUrl({maxWidth: 100, maxHeight: 100})} />
          </ListGroupItem>
        ))
      : <div>Loading...</div>}
    </ListGroup>*/}

    <GridList
      cellHeight={300}
      style={{ width: '100%' }}
    >
      {restaurants.length > 0 ? restaurants.map(restaurant => (
        <GridTile
          key={restaurant.id}
          title={restaurant.name}
          subtitle={restaurant.vicinity}
        >
          <img src={restaurant.photos[0].getUrl({maxWidth: 300, maxHeight: 300})} />
        </GridTile>
      )) : <div>Loading...</div>}
    </GridList>
    </div>
  )
}

export default Restaurant;
