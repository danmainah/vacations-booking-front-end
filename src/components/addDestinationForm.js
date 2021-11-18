import React, { useState } from 'react';
import postDestination from '../helpers/postDestinationData';

const DestForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [pricePerDay, setPricePerDay] = useState('0');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      postDestination(name, location, imageUrl, pricePerDay);
      e.target.reset();
    }}
    >
      <label htmlFor="name">
        Destination Name
        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
      </label>

      <label htmlFor="location">
        Location
        <input type="text" name="location" id="location" onChange={(e) => setLocation(e.target.value)} />
      </label>

      <label htmlFor="image_url">
        Image url
        <input type="text" name="image_url" id="image_url" onChange={(e) => setImageUrl(e.target.value)} />
      </label>

      <label htmlFor="price_per_day">
        Price per day
        <input type="number" name="price_per_day" id="price_per_day" min="0" onChange={(e) => setPricePerDay(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DestForm;
