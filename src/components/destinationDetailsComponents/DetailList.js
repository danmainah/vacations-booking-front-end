import React from 'react';

const DetailList = ({name , location, price_per_day}) => (
  <ul className="detail-list">
    <li>{name}</li>
    <li>{location}</li>
    <li>Cost: ${price_per_day}/day</li>
  </ul>
);