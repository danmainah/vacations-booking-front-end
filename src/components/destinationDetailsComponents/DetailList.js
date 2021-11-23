import React from 'react';
import PropTypes from 'prop-types';
import './DetailList.css';

const DetailList = ({ name, location, pricePerDay }) => (
  <ul className="detail-list my-5">
    <li className="d-flex justify-content-between px-2 py-1">
      <span>
        Name:
      </span>
      <span>
        {name}
      </span>
    </li>
    <li className="d-flex justify-content-between px-2 py-1">
      <span>
        Location:
      </span>
      <span>
        {location}
      </span>

    </li>
    <li className="d-flex justify-content-between px-2 py-1">
      <span>
        Cost:
      </span>
      <span>
        {pricePerDay}
        $/day
      </span>
    </li>
  </ul>
);

DetailList.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerDay: PropTypes.number.isRequired,
};

export default DetailList;
