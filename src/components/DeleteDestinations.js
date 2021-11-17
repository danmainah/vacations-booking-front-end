import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteThunkDestination } from '../redux/Destinations/destinations';

const DeleteDestinations = () => {
  // const hardcodedDestinations = [
  //   {
  //     id: 1,
  //     name: 'Bora Bora',
  //     location: 'French Polynesia',
  //     image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
  //     price_per_day: 150,
  //   },
  //   {
  //     id: 2,
  //     name: 'Bora Bora',
  //     location: 'French Polynesia',
  //     image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
  //     price_per_day: 150,
  //   },
  //   {
  //     id: 3,
  //     name: 'Bora Bora',
  //     location: 'French Polynesia',
  //     image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
  //     price_per_day: 150,
  //   },
  // ];

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
