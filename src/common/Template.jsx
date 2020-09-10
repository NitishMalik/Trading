import React, { ReactNode } from 'react';

import './template.css';

import { Navbar, Nav, Container } from 'react-bootstrap';


export default function AppTemplate({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  return (
    <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        Stock Trading
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-right">
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Footer() {
  return <footer>All rights Received</footer>
}
