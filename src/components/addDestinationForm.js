import React, { useState } from 'react';
import postDestination from '../helpers/postDestinationData';

const DestForm = () => {
  const [inputs, setInputs] = useState({
    name: '', location: '', image_url: '', price_per_day: '',
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      postDestination(inputs);
      e.target.reset();
    }}
    >
      <label htmlFor="name">
        Destination Name
        <input type="text" name="name" id="name" onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
      </label>

      <label htmlFor="location">
        Location
        <input type="text" name="location" id="location" onChange={(e) => setInputs({ ...inputs, location: e.target.value })} />
      </label>

      <label htmlFor="image_url">
        Image url
        <input type="text" name="image_url" id="image_url" onChange={(e) => setInputs({ ...inputs, image_url: e.target.value })} />
      </label>

      <label htmlFor="price_per_day">
        Price per day
        <input type="number" name="price_per_day" id="price_per_day" min="0" defaultValue="0" onChange={(e) => setInputs({ ...inputs, price_per_day: e.target.value })} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DestForm;
