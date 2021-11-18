import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { logInUser } from '../redux/Auth/auth';
import styles from '../styles/Login.module.css';

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
    <div className={styles.wrapper}>
      <div className={styles.mainForm}>
        <h1>Log In</h1>
        {errors ? <p>{ errors}</p> : ''}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={details.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={details.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="h5 pt-3">
            Don&apos;t have an account yet?
            {' '}
            <Link to="/register">Register now!</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
