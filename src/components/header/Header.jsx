import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from '../styled/Link.styled';
import style from './vehicletype.module.css';
import logo from './logo.svg';
import { Dropdown } from 'react-bootstrap';

const Header = (props) => {
  const { isAuth, data } = useSelector((state) => state.users);
  console.log(data);

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
            <div className={style.navmain}>
              <Link bold={props.home} href="/">
                Home
              </Link>
              <Link bold={props.vehicle} href="/vehicles">
                Vehicle Type
              </Link>
              <Link href="#">History</Link>
              <Link href="#">About</Link>
            </div>

            <div className={style.content}>
              {isAuth ? <Link href="/">{data.username}</Link> : null}
              <Link href="/">{data.username}</Link>
              <Link href="/">
                <img
                  className={style.thumbnail}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
