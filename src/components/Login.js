import React, { useState } from 'react';

export default function Login() {
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
