import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/reservation.module.css';
import postReservationThunk from '../helpers/postReservation';
import { isTokenExpired } from '../helpers/authUser';
import { logOutUser } from '../redux/Auth/auth';
import { clearStatus } from '../redux/Reservations/reservation';

export default function Reservation() {
  const username = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.user.token);
  const regStatus = useSelector((state) => state.reservations);
  const destinations = useSelector((state) => state.destinations.destinations);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const findDestName = (id) => {
    const dest = destinations.filter((dest) => dest.id === id);
    return dest[0].name;
  };

  let destination = (location.state && location.state.id) ? location.state.id : null;
  const destinationPassed = destination !== null;
  destination = destination === null ? destinations[0].name : findDestName(destination);
  const [chosenDestination, setChosenDestination] = useState(destination);

  useEffect(() => {
    const res = isTokenExpired();
    if (res) {
      localStorage.removeItem('token');
      dispatch(logOutUser());
      navigate('/login');
    }
    dispatch(clearStatus());
  }, []);

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

  const findDestID = (name) => {
    const dest = destinations.filter((dest) => dest.name === name);
    return dest[0].id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = findDestID(chosenDestination);

    const data = {
      destination_id: id,
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
      {(token && username) ? (
        <div
          className={styles.wrapper}
          // style={{
          //   backgroundImage: `url(${bgImg})`,
          // }}
        >
          {!submitted && (
          <div className={styles.formWrapper}>
            <h1 className={styles.pyramid}>BOOK YOUR VACATION</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum non orci at lacus ullamcorper blandit. Aenean aliquet pretium nisl,
              pharetra vulputate odio euismod a. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Suspendisse potenti. Quisque ornare posuere accumsan. Fusce malesuada velit
              in lacus convallis,
              a malesuada nisi mollis. Quisque quis bibendum lacus.

            </p>
            <Form onSubmit={handleSubmit} className={styles.form}>

              <Form.Group className="mb-3" controlId="user">
                <Form.Control type="text" value={username} disabled />
              </Form.Group>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="startDate">
                    <div className="mb-3">
                      <DatePicker
                        placeholderText="Pick a Start Date"
                        class="form-control"
                        id="startDatePicker"
                        selected={startDate}
                        minDate={new Date()}
                        onChange={handleStartDate}
                      />
                    </div>
                  </Form.Group>
                  {' '}

                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="endDate">
                    <DatePicker
                      placeholderText="Pick an End Date"
                      class="form-control"
                      selected={endDate}
                      minDate={startDate}
                      onChange={handleEndDate}
                    />
                  </Form.Group>
                  {' '}

                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  {destinationPassed
                    ? (
                      <Form.Group className="" controlId="destination">
                        <Form.Control type="text" value={chosenDestination} disabled />
                      </Form.Group>
                    ) : (
                      <Form.Group className="" controlId="destination">
                        <Form.Select
                          id="target"
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
                        </Form.Select>
                      </Form.Group>
                    )}
                  {' '}

                </Col>
                <Col>
                  <Button variant="primary" type="submit" className={styles.btnForm}>
                    Book Now
                  </Button>
                  {' '}

                </Col>
              </Row>

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
          {submitted && regStatus.success && (
          <div className="h4 text-success m-auto">
            {regStatus.success.message}
            . Your total cost is
            {' $'}
            {regStatus.success.total_cost}
          </div>
          )}
          {submitted && regStatus.errors && (
          <div className="h4 text-danger m-auto">
            {regStatus.errors[0]}
            {' '}
            {Object.entries(regStatus.errors[1]).map((key) => (
              <p key="key" className="h5">
                {key[0]}
                {' -  '}
                {key[1]}
              </p>
            ))}
            {' '}

            Please try again.
          </div>
          )}

        </div>
      ) : <Navigate to="/login" />}
    </>

  );
}
