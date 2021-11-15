import React from 'react';
import PropTypes from 'prop-types';

const DetailList = ({ name, location, price_per_day }) => (
  <ul className="detail-list">
    <li>{name}</li>
    <li>{location}</li>
    <li>
      Cost: $
      {price_per_day}
      /day
    </li>
  </ul>
);

DetailList.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price_per_day: PropTypes.number,
};

export default DetailList;
