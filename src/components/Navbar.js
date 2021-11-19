/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const activeStyle = {
    color: 'white',
    backgroundColor: 'lightgreen',
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          DESTINATIONS

        </NavLink>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          MAKE RESERVATIONS

        </NavLink>
        <NavLink
          to="/reservations"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}

          // style={({ isActive }) => ({
          //   color: isActive ? 'white' : 'black',
          //   backgroundColor: isActive ? 'lightgreen' : 'white',

          // })}
        >
          MY RESERVATIONS

        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ADD DESTINATION

        </NavLink>
        <NavLink
          to="/dvdv"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          DELETE DESTINATION

        </NavLink>
      </div>
      <div className={styles.footer}>
        <div className="socialwrapper d-flex">
          <FaTwitter style={{ fontSize: '30px' }} />
          <FaFacebookF style={{ fontSize: '30px' }} />
          <FaGooglePlusG style={{ fontSize: '30px' }} />
          <FaVimeoV style={{ fontSize: '30px' }} />
          <FaPinterestP style={{ fontSize: '30px' }} />
        </div>

        <div className="mt-3">&copy; 2021 World Travel Group</div>
      </div>
    </nav>
  );
};
export default Navbar;
