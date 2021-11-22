import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import DetailList from './destinationDetailsComponents/DetailList';
import ReserveButton from './destinationDetailsComponents/ReserveButton';

const DestinationDetails = ({ id }) => {
  const history = useHistory();

  const handleClick = () => history.goback();

  const destinations = useSelector((state) => state.destinations);

  const destination = destinations.find((dest) => dest.id === id);

  return (
    <div style={{ backgroundImage: `url(${destination.imageUrl})` }}>
      <button type="button" onClick={handleClick} className="back-button">Back</button>
      <aside>
        <h2>{destination.name}</h2>
        <DetailList
          name={destination.name}
          location={destination.location}
          pricePerDay={destination.pricePerDay}
        />
        <Link to="/destinations">
          DISCOVER MORE
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <ReserveButton id={id} />
      </aside>
    </div>
  );
};

DestinationDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DestinationDetails;
