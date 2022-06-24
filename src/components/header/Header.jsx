import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from '../styled/Link.styled';
import style from './vehicletype.module.css';
import logo from './logo.svg';

function header() {
  return (
    <>
      <Navbar className={style.nav}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
            <Nav>
              <Link href="/">Home</Link>
              <Link href="/vehicles">Vehicle Type</Link>
              <Link href="#">History</Link>
              <Link href="#">About</Link>
            </Nav>
            <Nav className={style.content}>
              <Link href="/">Home</Link>
              <Link href="/vehicles">Vehicle Type</Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
