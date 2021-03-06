import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/Auth/auth';
import '../styles/Register.css';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);
  const errors = useSelector((state) => state.user.errors);

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
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
    <div className="register">
      <h2>CREATE YOUR ACCOUNT</h2>
      <hr className="form-rule" />
      <p>Sign up now and book desired destination</p>
      {errors ? <p>{Object.keys(errors) ? (`${Object.keys(errors)} ${Object.values(errors)}`) : errors}</p> : ''}
      <form className="form " onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="username"
          type="text"
          name="username"
          value={details.username}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          placeholder="email"
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          placeholder="password"
          type="password"
          name="password"
          value={details.password}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={details.password_confirmation}
          onChange={handleChange}
          required
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
    </div>
  );
}
