import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../redux/Auth/auth';
import NavItem from './NavItem';

export default function MenuItems() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const isAdmin = useSelector((state) => state.user.admin);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
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
    {
      to: '/',
      text: 'LOG OUT',
      admin: false,
      protected: true,
      clickHandler: handleLogOut,
    },
    {
      to: '/login',
      text: 'LOG IN',
      admin: false,
      protected: false,
      clickHandler: null,
    },
  ];

  return (

    urls.map((url) => {
      if (url.admin) {
        return (isAdmin && (
          <NavItem
            key={Math.floor(Math.random() * (1000 - 1) + 1)}
            to={url.to}
            text={url.text}
            clickHandler={url.clickHandler}
          />
        ));
      } if (url.protected) {
        return (loggedIn && (
          <NavItem
            key={Math.floor(Math.random() * (1000 - 1) + 1)}
            to={url.to}
            text={url.text}
            clickHandler={url.clickHandler}
          />
        ));
      }
      return (
        <NavItem
          key={Math.floor(Math.random() * (1000 - 1) + 1)}
          to={url.to}
          text={url.text}
          clickHandler={url.clickHandler}
        />
      );
    }) // <>
    //   <NavLink
    //     to="/"
    //     style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //   >
    //     DESTINATIONS

  //   </NavLink>
  //   <NavLink
  //     to="/reserve"
  //     style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //   >
  //     MAKE RESERVATIONS

  //   </NavLink>
  //   {loggedIn && (
  //   <NavLink
  //     to="/reservations"
  //     style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //   >
  //     MY RESERVATIONS

  //   </NavLink>
  //   )}
  //   {admin && (
  //   <NavLink
  //     to="/dest"
  //     style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //   >
  //     ADD DESTINATION

  //   </NavLink>
  //   )}
  //   {admin && (
  //   <NavLink
  //     to="/destinations/delete"
  //     style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //   >
  //     DELETE DESTINATION

  //   </NavLink>
  //   )}
  //   {loggedIn ? (

  //     <NavLink
  //       to="/"
  //       className={styles.buttonStyle}
  //       onClick={handleLogOut}
  //     >
  //       LOG OUT

  //     </NavLink>

  //   )
  //     : (
  //       <NavLink
  //         to="/login"
  //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
  //       >
  //         LOG IN

  //       </NavLink>
  //     )}
  // </>
  );
}
