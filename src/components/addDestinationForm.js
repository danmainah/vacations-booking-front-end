import React, { useState } from 'react';
import postDestination from '../helpers/postDestinationData';

const DestForm = () => {
  const [inputs, setInputs] = useState({
    name: '', location: '', image_url: '', price_per_day: '',
  });

  return (
    <section className="post-form-section position-relative vw-100 vh-100">
      <h1 className="text-center py-5">Add new destination</h1>
      <form
        className="mt-5 w-25 d-flex flex-column mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          postDestination(inputs);
          e.target.reset();
        }}
      >
        <label className="justify-content-between d-flex p-2" htmlFor="name">
          Destination Name
          <input type="text" name="name" id="name" onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
        </label>

        <label className="justify-content-between d-flex p-2" htmlFor="location">
          Location
          <input type="text" name="location" id="location" onChange={(e) => setInputs({ ...inputs, location: e.target.value })} />
        </label>

        <label className="justify-content-between d-flex p-2" htmlFor="image_url">
          Image url
          <input type="text" name="image_url" id="image_url" onChange={(e) => setInputs({ ...inputs, image_url: e.target.value })} />
        </label>

        <label className="justify-content-between d-flex p-2" htmlFor="price_per_day">
          Price per day
          <input type="number" name="price_per_day" id="price_per_day" min="0" defaultValue="0" onChange={(e) => setInputs({ ...inputs, price_per_day: e.target.value })} />
        </label>

        <button className="btn btn-success mt-5" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default DestForm;
