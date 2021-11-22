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
    <div>
      <ul>
        {destinations
        && destinations.map((destination) => (
          <li key={destination.id}>
            {destination.name}
            <Button variant="danger" onClick={handleDelete}>
              Remove destination
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDestinations;
