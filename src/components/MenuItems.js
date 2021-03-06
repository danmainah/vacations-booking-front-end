import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/Auth/auth';
import NavItem from './NavItem';
import styles from '../styles/Navbar.module.css';

export default function MenuItems() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const isAdmin = useSelector((state) => state.user.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeStyle = {
    color: 'white',
    backgroundColor: '#97BF11',
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
    navigate('/');
  };

  const urls = [
    {
      to: '/',
      text: 'DESTINATIONS',
      admin: false,
      protected: false,
    },
    {
      to: '/reserve',
      text: 'MAKE RESERVATIONS',
      admin: false,
      protected: false,
      clickHandler: null,

    },
    {
      to: '/reservations',
      text: 'MY RESERVATIONS',
      admin: false,
      protected: true,
      clickHandler: null,

    },
    {
      to: '/dest',
      text: 'ADD DESTINATION',
      admin: true,
      protected: true,
      clickHandler: null,

    },
    {
      to: '/destinations/delete',
      text: 'DELETE DESTINATION',
      admin: true,
      protected: true,
      clickHandler: null,

    },
  ];

  return (
    <>
      { urls.map((url) => {
        if (url.admin) {
          return (isAdmin && (
          <NavItem
            key={Math.floor(Math.random() * (1000 - 1) + 1)}
            to={url.to}
            text={url.text}
            clickHandler={url.clickHandler}
            activeStyle={activeStyle}
          />
          ));
        } if (url.protected) {
          return (loggedIn && (
          <NavItem
            key={Math.floor(Math.random() * (1000 - 1) + 1)}
            to={url.to}
            text={url.text}
            clickHandler={url.clickHandler}
            activeStyle={activeStyle}
          />
          ));
        }
        return (
          <NavItem
            key={Math.floor(Math.random() * (1000 - 1) + 1)}
            to={url.to}
            text={url.text}
            clickHandler={url.clickHandler}
            activeStyle={activeStyle}
          />
        );
      })}

      {loggedIn ? (

        <NavItem
          to="/logout"
          className={styles.buttonStyle}
          clickHandler={handleLogOut}
          text="LOG OUT"
        />

      )
        : (
          <NavItem
            to="/login"
            activeStyle={activeStyle}
            text="LOG IN"
          />
        )}

    </>
  );
}
