import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReserveButton = ({ id }) => {
  const reserveButtonstatuses = useSelector((state) => state.reserveButtonStatuses);

  const buttonStatus = (id) => reserveButtonstatuses.some((item) => item.id === id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserveDestination(id));
  };
  return (
    <button type="button" onClick={handleClick} disabled={buttonStatus}>
      {buttonStatus ? 'Reserve' : 'Reserved'}
    </button>
  );
};

export default ReserveButton;
