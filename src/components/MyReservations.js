import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
// eslint-disable-next-line import/extensions
import { getReservationThunk, cancelReservation } from '../redux/Reservations/reservation';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();

  console.log(reservations);

  useEffect(() => {
    dispatch(getReservationThunk());
  }, []);

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <>
      <h2>My Reservations</h2>
      <ul>
        {' '}
        {
        reservations.map((reservation) => (
          <li key={reservation.id}>
            <span>
              {' '}
              {reservation.name}
              {' '}
            </span>
            <span>
              {' '}
              from:
              {reservation.startingDay}
            </span>
            <span>
              {' '}
              to:
              {reservation.endingDay}
            </span>
            <span>
              {' '}
              cost:
              {reservation.cost}
            </span>
            <button
              type="button"
              onClick={() => handleCancelClick(reservation.id)}
            >
              Cancel reservation
            </button>
          </li>
        ))
      }
      </ul>
    </>
  );
};

export default MyReservations;
