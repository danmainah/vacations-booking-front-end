/* eslint-disable react/prop-types */
import React from 'react';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import MenuItems from './MenuItems';
import NavMobile from './NavMobile';

const Navbar = () => (
  <header>
    <nav className={styles.wrapper} id="desktop">
      <div className={styles.logoWrapper}>
        <div className={styles.logo} />
      </div>
      <div className={styles.menu}>
        <MenuItems />
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
    <NavMobile />
  </header>
);
export default Navbar;
