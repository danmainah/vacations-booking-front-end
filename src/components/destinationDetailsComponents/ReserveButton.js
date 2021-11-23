import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ReserveButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate('/reserve', { id });
  };
  return (
    <button className="w-75 dest-detail-btn" type="button" onClick={() => handleClick(id)}>
      Reserve
    </button>
  );
};

ReserveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReserveButton;
