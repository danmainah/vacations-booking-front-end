import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DetailList from './destinationDetailsComponents/DetailList';
import ReserveButton from './destinationDetailsComponents/ReserveButton';
import '../styles/destinationDetails.css';

const DestinationDetails = () => {
  const navigate = useNavigate();
  const { destinationId } = useParams();

  const handleClick = () => navigate('/');

  const destinations = useSelector((state) => state.destinations.destinations);

  const destination = destinations.find((dest) => dest.id === Number(destinationId));
  console.log(destinations);

  return (
    <div className="row container-fluid vh-100 mt-5">
      <div className="col-lg-8 d-none d-lg-block mt-5 destCoverImage" style={{ backgroundImage: `url('${destination.image_url}')` }} />
      <aside className="col-lg-4 col-md-12 mt-5 d-flex flex-column">
        <h1 className="text-end details-header">{destination.name}</h1>
        <DetailList
          name={destination.name}
          location={destination.location}
          pricePerDay={destination.price_per_day}
        />
        <Link to="/" className="justify-content-end d-flex align-items-center details-link-to-home">
          DISCOVER MORE
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <div className="justify-self-end h-100 d-flex align-items-end justify-content-center">
          <ReserveButton id={destinationId} />
        </div>
      </aside>
      <button className="dest-detail-btn mt-3 w-25 mx-auto mx-lg-0" type="button" onClick={handleClick}>Back</button>
    </div>
  );
};

export default DestinationDetails;
