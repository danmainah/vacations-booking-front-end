import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand text-success" href="/">Choose the vacation from your dreams</a>

    <section className="d-flex justify-content-around w-50 mx-auto">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Destinations
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Reservations
            </a>
          </li>
        </ul>
      </div>

      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Sign In
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Sign Up
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </section>
  </nav>
);

export default Navbar;
