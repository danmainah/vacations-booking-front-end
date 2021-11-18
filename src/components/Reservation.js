import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './reservation.css';
// import { createReservations } from '../redux/reservations/reservationReducer';

export default function Reservation(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  let { destination } = props;
  const destinationPassed = destination !== 'default';
  destination = destination === 'default' ? 'Bora Bora' : destination;
  const [chosenDestination, setChosenDestination] = useState(destination);

  // const dispatch = useDispatch();

  const id = useSelector((state) => state.user.details);
  const username = 'defaultUser';
  // const destinations = useSelector((state) => state.destinations);
  const destinations = [
    {
      id: 1,
      name: 'Bora Bora',
      location: 'French Polynesia',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638534/bora-bora-island_tcyoev.jpg',
      price_per_day: '150',
    },
    {
      id: 2,
      name: 'Rome',
      location: 'Italy',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636638500/Rome-Italy_isahvk.jpg',
      price_per_day: '100',
    },
    {
      id: 3,
      name: 'Gracier National Park',
      location: 'USA',
      image_url: 'https://res.cloudinary.com/dqdrsilxz/image/upload/v1636573679/sample.jpg',
      price_per_day: '100',
    },
  ];

  const setBackgroundImg = () => {
    const url = destinations.filter((place) => place.name === chosenDestination);
    console.log(url[0].image_url);
    return url[0].image_url;
  };

  // const style = {
  //   background: `url(${setBackgroundImg()}) no-repeat center center fixed`,
  //   backgroundSize: 'cover',
  //   opacity: 0.7,
  //   backgroundColor: 'rgba(0, 0, 0, 0.7)',
  //   margin: 'auto auto',
  // };

  const [bgImg, setBgImg] = useState(setBackgroundImg());

  useEffect(() => {
    setBgImg(setBackgroundImg());
  }, [chosenDestination]);

  const handleStartDate = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moment(endDate).format('l'));
    console.log(
      {
        user_id: id,
        destination_id: chosenDestination,
        startingDay: moment(startDate).format('l'),
        endingDay: moment(endDate).format('l'),
      },
    );
    // dispatch(createReservations({
    //   user_id: username,
    //   destination_id: chosenDestination,
    //   startingDay: moment(startDate).format('l'),
    //   endingDay: moment(endDate).format('l'),
    // }));
  };

  return (
    <div
      className="wrapper"
      style={{
        background: `url(${bgImg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        margin: 'auto auto',
      }}
    >
      <h1>Reservation form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="user">
          <Form.Label>User</Form.Label>
          <Form.Control type="text" value={username} disabled />
        </Form.Group>

        {destinationPassed
          ? (
            <Form.Group className="mb-3" controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" value={destination} disabled />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                as="select"
                value={chosenDestination}
                onChange={(e) => {
                  setChosenDestination(e.target.value);
                }}
              >
                {destinations.map(({ name, id }) => <option value={name} key={id}>{name}</option>)}
              </Form.Control>
            </Form.Group>
          )}

        <Form.Group className="mb-3" controlId="startDate">
          <Form.Label>Pick a Start Date:</Form.Label>
          <div className="mb-3">
            <DatePicker
              class="form-control"
              id="startDatePicker"
              selected={startDate}
              minDate={new Date()}
              onChange={handleStartDate}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="endDate">
          <Form.Label>Pick an End Date:</Form.Label>
          <DatePicker
            class="form-control"
            selected={endDate}
            minDate={startDate}
            onChange={handleEndDate}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {startDate && endDate && (
      <div className="summary">
        <p>
          You book a tour from
          {' '}
          {moment(startDate).format('LL')}
          {' '}
          to
          {' '}
          {moment(endDate).format('LL')}
          .
        </p>
      </div>
      )}
    </div>
  );
}

Reservation.propTypes = {
  destination: PropTypes.string,
};
Reservation.defaultProps = {
  destination: 'default',
};
