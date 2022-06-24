import React from 'react';
import { Container } from 'react-bootstrap';
import { Hero, Flex, Button } from '../styled/Hero.styled';
// import style from './vehicletype.module.css';
// import logo from './logo.svg';

function hero() {
  return (
    <>
      <Hero>
        <Container>
          <h1>Explore and Travel</h1>
          <p>Vehicle Finder</p>
          <Flex>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Location
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Type
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </Flex>
          <Flex>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Payment
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="" selected disabled hidden>
                Date
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </Flex>
          <Button>explore</Button>
        </Container>
      </Hero>
    </>
  );
}

export default hero;
