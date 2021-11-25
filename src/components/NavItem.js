import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavItem(props) {
  const { to, text, clickHandler } = props;
  const activeStyle = {
    color: 'white',
    backgroundColor: '#97BF11',
  };

  return (
    <>
      <NavLink
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={clickHandler}
      >
        {text}

      </NavLink>
    </>
  );
}
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

NavItem.defaultProps = {
  clickHandler: null,
};
