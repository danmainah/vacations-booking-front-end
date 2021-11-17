import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logInUser } from '../redux/Auth/auth';

export default function Login() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const errors = useSelector((state) => state.user.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn]);

  const formData = {
    email: '',
    password: '',
  };
  const [details, setDetails] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(details));
  };

  return (
    <div>
      <h1>Log In</h1>
      {errors ? <p>{ errors}</p> : ''}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={details.password}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <p>
          Don&apos;t have an account yet?
          {' '}
          <Link to="/register">Register now!</Link>
        </p>
      </form>
    </div>
  );
}
