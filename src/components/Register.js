import React, { useState } from 'react';

export default function Register() {
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
