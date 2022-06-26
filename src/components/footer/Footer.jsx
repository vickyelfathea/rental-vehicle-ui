import React from 'react';
import { Foot, Content } from '../styled/Footer.styled';
import logo from './logo.svg';

const Footer = () => {
  return (
    <>
      <Foot>
        <Content>
          {' '}
          <div>
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <p>
              {' '}
              <br />
              Plan and book your perfect trip with expert advice, travel tips
              for vehicle information from us
            </p>{' '}
            <br />
            <p>2020 Vicky Vehicle Rental Center. All rights reserved</p>
          </div>
          <ul>
            {' '}
            Destinations
            <li>Bali</li>
            <li>Jogjakarta</li>
            <li>Jakarta</li>
            <li>Kalimantan</li>
            <li>Malang</li>
          </ul>
          <ul>
            {' '}
            Vehicle
            <li>Bike</li>
            <li>Cars</li>
            <li>Motorbike</li>
            <li>MReturn Times</li>
            <li>FAQs</li>
          </ul>
          <ul>
            {' '}
            Interest
            <li>Adventure</li>
            <li>Art and Culture</li>
            <li>Wildlife and Nature</li>
            <li>Family Holidays</li>
            <li>Culinary Trip</li>
          </ul>
        </Content>
      </Foot>
    </>
  );
};

export default Footer;
