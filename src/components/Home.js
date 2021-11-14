import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div>
      <Link to="/login">Log In</Link>
      <br />
      <Link to="/register">Sign Up</Link>
      <div>Home Component</div>
    </div>

  );
}
