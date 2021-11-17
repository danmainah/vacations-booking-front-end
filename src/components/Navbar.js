import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/">Destination&apos;s</NavLink>
    <NavLink to="/">Make reservation</NavLink>
    <NavLink to="/">My reservations</NavLink>
    <NavLink to="/">Add destination</NavLink>
    <NavLink to="/">Delete destination</NavLink>
  </nav>
);

export default Navbar;
