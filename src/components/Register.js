import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/Auth/auth';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);
  useEffect(() => {
    if (loggedIn) {
      navigate('/user');
    }
  }, [loggedIn]);

  const userDetails = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const [details, setDetails] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(details));
    setDetails({
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  };

  return (
    <div>
      <h1>Sign Up for an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={details.username}
          onChange={handleChange}
        />
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={details.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
    </div>
  );
}
