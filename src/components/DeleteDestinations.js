import React from 'react';

const DeleteDestinations = () => {
  const hardcodedDestinations = [
    {
      id: 1,
      name: 'Bora Bora',
      location: 'French Polynesia',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
      price_per_day: 150,
    },
    {
      id: 2,
      name: 'Bora Bora',
      location: 'French Polynesia',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
      price_per_day: 150,
    },
    {
      id: 3,
      name: 'Bora Bora',
      location: 'French Polynesia',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
      price_per_day: 150,
    },
  ];
  return (
    <div>
      <ul>
        {hardcodedDestinations
        && hardcodedDestinations.map((destination) => (
          <li>

          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default DeleteDestinations;
