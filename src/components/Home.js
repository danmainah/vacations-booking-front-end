import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { logOutUser } from '../redux/Auth/auth';

export default function Home() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <>
      <Navbar />
      {loggedIn ? (
        <div>
          <div>
            Welcome
            {' '}
            {username}
            !
          </div>

          <button type="submit" onClick={handleLogOut}>Log Out</button>
        </div>
      )
        : (
          <div>
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/register">Sign Up</Link>
          </div>
        )}
      <div>Home Component</div>
    </>
  );
}
