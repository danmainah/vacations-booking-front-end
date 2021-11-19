/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { location } = props;

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo} />
      <div className={styles.menu}>
        <NavLink exact to="/" activeClassName="activee">Destination&apos;s</NavLink>
        <NavLink to="/home" activeClassName="activeMenuItem">Make reservation</NavLink>
        <NavLink to="/register" activeClassName={styles.menu.active}>My reservations</NavLink>
        <NavLink to="/login" activeClassName="active">Add destination</NavLink>
        <NavLink to="/dvdv" activeClassName="active">Delete destination</NavLink>
      </div>
      <Nav activeKey={location.pathname}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/one">One</Nav.Link>
        <Nav.Link href="/two">Two</Nav.Link>
      </Nav>
    </nav>
  );
};
export default Navbar;
