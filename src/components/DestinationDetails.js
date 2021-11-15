import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DetailList from './destinationDetailsComponents/DetailList';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const DestinationDetails = ({name, location, image_url, price_per_day}) => {
  return (
    <div style={{backgroundImage: url(image_url)}}>
      <button type='button' onClick={history.back()}>Back</button>
      <aside>
        <DetailList component={{name, location, price_per_day}}/>
        <Link to='/destinations'>DISCOVER MORE <FontAwesomeIcon icon={faAngleRight} /></Link>
        <ReserveButton />
      </aside>
    </div>
  );
}

DestinationDetails.protoTypes = {
  image_url: PropTypes.string,
  location: PropTypes.string,
  image_url: PropTypes.string,
  price_per_day: PropTypes.number,
}