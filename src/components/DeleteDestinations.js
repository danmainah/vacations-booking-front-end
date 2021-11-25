import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteThunkDestination } from '../redux/Destinations/destinations';
import styles from '../styles/Delete.module.css';

const DeleteDestinations = () => {
  const destinations = useSelector((state) => state.destinations.destinations);
  const dispatch = useDispatch();

  const handleDelete = (destinationId) => {
    dispatch(deleteThunkDestination(destinationId));
  };
  return (
    <div className={styles.delete}>
      <div className="listed">
        <h3 className="text-center mb-4"> My Destinations </h3>
      </div>
      <ul className="list-group">
        {destinations
        && destinations.map((destination) => (
          <li className="list-group-item d-flex justify-content-between" key={destination.id}>
            {destination.name}
            <Button className="ms-5 btn-danger" onClick={() => handleDelete(destination.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDestinations;
