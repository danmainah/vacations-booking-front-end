import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavItem(props) {
  const {
    to, text, clickHandler, activeStyle,
  } = props;

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
  activeStyle: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
};

NavItem.defaultProps = {
  clickHandler: null,
  activeStyle: null,
};
