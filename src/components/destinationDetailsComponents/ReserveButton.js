import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reserveDestination } from '../../redux/reservations/reservationReducers';

const ReserveButton = ({ id }) => {
  const reservations = useSelector((state) => state.reservations);

  const buttonStatus = (id) => reservations.some((item) => item.destination_id === id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserveDestination(id));
  };
  return (
    <button type="button" onClick={handleClick}>
      {buttonStatus ? 'Reserve' : 'Reserved'}
    </button>
  );
};

ReserveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReserveButton;
