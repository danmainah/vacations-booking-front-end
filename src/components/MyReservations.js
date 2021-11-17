import React, {
  useEffect,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  loadReservations,
  cancelReservation,
} from '../redux/reservations/reservationReducer';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reservations === []) {
      dispatch(loadReservations());
    }
  }, []);

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
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
            {reservation.startDate}
          </span>
          <span>
            {' '}
            to:
            {reservation.endDate}
          </span>
          <span>
            {' '}
            to:
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
  );
};

export default MyReservations;
