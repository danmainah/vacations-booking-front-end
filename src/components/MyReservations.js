import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteReservationThunk, reservationIsLoading, loadReservationsThunk } from '../redux/Reservations/reservation';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.reservations.loading);
  const userLogged = useSelector((state) => state.user.logged_in);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(reservationIsLoading());
    dispatch(loadReservationsThunk(token));
  }, [dispatch]);

  useEffect(() => {
    if (!userLogged) {
      navigate('/login');
    }
  }, [!userLogged]);

  const handleCancelClick = (id) => {
    dispatch(reservationIsLoading());
    dispatch(deleteReservationThunk(id));
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
            {reservations
        && reservations.map((reservation) => (
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
        ))}
          </ul>
        </>
      )}
    </>
  );
};

export default MyReservations;
