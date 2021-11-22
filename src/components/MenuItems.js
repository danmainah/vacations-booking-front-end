import React, { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../redux/Auth/auth';
import styles from '../styles/Navbar.module.css';

export default function MenuItems() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const admin = useSelector((state) => state.user.admin);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);

  const activeStyle = {
    color: 'white',
    backgroundColor: '#97BF11',
  };

  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        DESTINATIONS

      </NavLink>
      <NavLink
        to="/reserve"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        MAKE RESERVATIONS

      </NavLink>
      {loggedIn && (
      <NavLink
        to="/reservations"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        MY RESERVATIONS

      </NavLink>
      )}
      {admin && (
      <NavLink
        to="/dest"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        ADD DESTINATION

      </NavLink>
      )}
      {admin && (
      <NavLink
        to="/destinations/delete"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        DELETE DESTINATION

      </NavLink>
      )}
      {/* {!loggedIn && (
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        LOG IN

      </NavLink>
      )} */}
      {loggedIn ? (

        <Navlink
          to="/"
          className={styles.buttonStyle}
          onClick={handleLogOut}
        >
          LOG OUT

        </Navlink>

      )
        : (
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            LOG IN

          </NavLink>
        )}
    </>
  );
}

// {loggedIn && (
//   <button
//     type="button"
//     style={({ isActive }) => (isActive ? activeStyle : undefined)}
//     onClick={handleLogOut}
//   >
//     LOG OUT

//   </button>
//   )}
