import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import DetailList from './destinationDetailsComponents/DetailList';
import ReserveButton from './destinationDetailsComponents/ReserveButton';

const DestinationDetails = ({
  id, name, location, imageUrl, pricePerDay,
}) => {
  const history = useHistory();

  const handleClick = () => history.goback();

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <button type="button" onClick={handleClick} className="back-button">Back</button>
      <aside>
        <DetailList component={{ name, location, pricePerDay }} />
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
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  pricePerDay: PropTypes.number.isRequired,
};

export default DestinationDetails;
