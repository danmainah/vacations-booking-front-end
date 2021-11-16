import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../redux/Auth/auth';

export default function Login() {
  const loggedIn = useSelector((state) => state.user.logged_in);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/user');
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

      </form>
    </div>
  );
}
