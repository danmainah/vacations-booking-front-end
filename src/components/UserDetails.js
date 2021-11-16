import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../redux/Auth/auth';

export default function UserDetails() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const username = useSelector((state) => state.user.details);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/register');
    }
  }, [loggedIn]);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
    navigate('/');
  };

  return (
    <>
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
      <div>User Details page</div>
    </>

  );
}
