import React from 'react';
import PropTypes from 'prop-types';

const DetailList = ({ name, location, pricePerDay }) => (
  <ul className="detail-list">
    <li>{name}</li>
    <li>{location}</li>
    <li>
      Cost: $
      {pricePerDay}
      /day
    </li>
  </ul>
);

DetailList.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerDay: PropTypes.number.isRequired,
};

export default DetailList;
