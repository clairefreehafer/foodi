import React from 'react';

import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

const Restaurant = (props) => {
  const restaurants = props.restaurants;

  return (
    <div>
      <PageHeader>Restaurants Near You</PageHeader>
            {restaurants.length > 0 ? console.log(restaurants[0].photos[0].getUrl({maxWidth: 100, maxHeight: 100})) : null}
      <ListGroup>
        {restaurants.length > 0 ? restaurants.map(restaurant => (
          <ListGroupItem key={restaurant.id} header={restaurant.name}>
            {restaurant.vicinity}
            <img src={restaurant.photos[0].getUrl({maxWidth: 100, maxHeight: 100})} />
          </ListGroupItem>
        ))
      : <div>Loading...</div>}
      </ListGroup>
    </div>
  )
}

export default Restaurant;
