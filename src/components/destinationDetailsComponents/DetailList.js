import React from 'react';

const DetailList = ({name , location, price_per_day}) => (
  <ul>
    <li>{name}</li>
    <li>{location}</li>
    <li>Cost: ${price_per_day}/day</li>
  </ul>
);