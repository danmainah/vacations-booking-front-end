import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteThunkDestination } from '../redux/Destinations/destinations';

const DeleteDestinations = () => {
  const destinations = useSelector((state) => state.destinations.destinations);
  const dispatch = useDispatch();
  const handleDelete = (destinationId) => {
    dispatch(deleteThunkDestination(destinationId));
  };
  return (
    <div className="position-absolute bottom-50 end-50">
      <div>
        <h3 className="text-center mb-4"> My Destinations </h3>
      </div>
      <ul className="list-group">
        {destinations
        && destinations.map((destination) => (
          <li className="list-group-item d-flex justify-content-between align-items-start" key={destination.id}>
            {destination.name}
            <Button variant="danger" className="ms-5" onClick={handleDelete}>
              Remove destination
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDestinations;
