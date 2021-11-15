import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DetailList from './destinationDetailsComponents/DetailList';
import ReserveButton from './destinationDetailsComponents/ReserveButton';

const DestinationDetails = ({
  id, name, location, image_url, price_per_day,
}) => (
  <div style={{ backgroundImage: url(image_url) }}>
    <button type="button" onClick={history.back()} className="back-button">Back</button>
    <aside>
      <DetailList component={{ name, location, price_per_day }} />
      <Link to="/destinations">
        DISCOVER MORE
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      <ReserveButton id={id} />
    </aside>
  </div>
);

DestinationDetails.protoTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  location: PropTypes.string,
  image_url: PropTypes.string,
  price_per_day: PropTypes.number,
};
