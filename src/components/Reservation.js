import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigate } from 'react-router-dom';
import moment from 'moment';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/reservation.module.css';
import postReservationThunk from '../helpers/postReservation';

export default function Reservation(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  let { destination } = props;
  const destinationPassed = destination !== 'default';
  destination = destination === 'default' ? 'Bora Bora' : destination;
  const [chosenDestination, setChosenDestination] = useState(destination);
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.user.token);

  // const destinations = useSelector((state) => state.destinations.destination);
  // destinations.forEach((des, idx) => ({ ...des, id: idx }));
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

  // const setBackgroundImg = () => {
  //   const url = destinations.filter((place) => place.name === chosenDestination);
  //   return url[0].image_url || url.image_url;
  // };

  // const [bgImg, setBgImg] = useState(setBackgroundImg());

  // useEffect(() => {
  //   setBgImg(setBackgroundImg());
  // }, [chosenDestination]);

  const handleStartDate = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      destination_id: 1,
      startingDay: moment(startDate).format('YYYY-MM-DD'),
      endingDay: moment(endDate).format('YYYY-MM-DD'),
    };
    dispatch(postReservationThunk(token, data));
    setStartDate(null);
    setEndDate(null);
    setSubmitted(true);
  };

  return (
    <>
      {token ? (
        <div
          className={styles.wrapper}
          // style={{
          //   backgroundImage: `url(${bgImg})`,
          // }}
        >
          {!submitted && (
          <div>
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
                      {destinations.map(({ name, id }) => (
                        <option
                          value={name}
                          key={id}
                        >
                          {name}
                        </option>
                      ))}
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
          )}
          {submitted && <p className="h4 text-success text-center">Reservation successfully created!</p>}
        </div>
      ) : <Navigate to="/login" />}
    </>

  );
}

Reservation.propTypes = {
  destination: PropTypes.string,
};
Reservation.defaultProps = {
  destination: 'default',
};
