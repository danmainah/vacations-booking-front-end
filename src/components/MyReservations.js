import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
// eslint-disable-next-line import/extensions
import { cancelReservation } from '../redux/reservations/reservationReducer';
// import { getReservationThunk, reservationIsLoading } from '../redux/Reservations/reservation';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.reservations.loading);

  // useEffect(() => {
  //   if (reservations === []) {
  //     dispatch(loadReservations());
  //   }
  // }, []);

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <>
      { isLoading ? (
        <img className="w-100" src="rotate-pulsating-loading-animation.webp" alt="spinner" />
      ) : (
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
        </>
      )}
    </>
  );
};

export default MyReservations;
