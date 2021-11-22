import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MenuItems from './MenuItems';

export default function NavMobile() {
  return (
    <Navbar expand="lg" id="mobile">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="/"> */}
          <MenuItems />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
