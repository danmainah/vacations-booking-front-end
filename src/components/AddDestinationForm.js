import '../styles/postForm.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import postDestination from '../helpers/postDestinationData';

const DestForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: '', location: '', image_url: '', price_per_day: '', displayMessage: '',
  });
  const handlePost = (destinationId) => {
    dispatch(postDestination(destinationId));
    setInputs({ displayMessage: 'Destination succesfully created!!!' });
    setTimeout(() => {
      setInputs({ ...inputs, displayMessage: '' });
    }, 4000);
  };

  return (
    <div className="wrapper" id="login">
      <div className="mainForm w-50">
        <h1>{inputs.displayMessage}</h1>
        <Form onSubmit={(e) => {
          e.preventDefault();
          handlePost(inputs);
          e.target.reset();
        }}
        >
          <Form.Group className="mb-3" controlId="name">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter destination name"
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image_url">
            <Form.Control
              type="text"
              name="image_url"
              placeholder="Enter image url"
              onChange={(e) => setInputs({ ...inputs, image_url: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price_per_day">
            <Form.Control
              type="number"
              name="name"
              placeholder="Price per day"
              onChange={(e) => setInputs({ ...inputs, price_per_day: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btnForm">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  );
};

export default DestForm;
