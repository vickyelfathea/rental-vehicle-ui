import React, { useState, useEffect } from 'react';
import style from './vehicletype.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Cardpiki from '../../components/cardpiki/Cardpiki';
import Cards from '../../components/cards/Cards';

function Home() {
  const [prod, setProd] = useState([]);

  const getDataProd = async () => {
    try {
      const { data } = await axios.get(
        'https://car-rent-vicky.herokuapp.com/vehicles/'
      );
      setProd(data.data);
    } catch (error) {
      console.log('🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error', error);
    }
  };

  // didmount
  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sub">
          <h2>popular in town</h2>
          <a href="#viewall">view all {'>'} </a>
        </div>

        <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cardpiki
                key={v.ID}
                id={v.ID}
                title={v.name}
                image={v.image}
                city={v.city}
              />
            );
          })}
        </div>

        <div className="sub">
          <h2>cars</h2>
          <a href="#viewall">view all {'>'} </a>
        </div>

        <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cardpiki
                key={v.id}
                id={v.id}
                title={v.name}
                image={v.image}
                city={v.city}
              />
            );
          })}
        </div>

        <div className="sub">
          <h2>motorbike</h2>
          <a href="#viewall">view all {'>'} </a>
        </div>

        <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cardpiki
                key={v.ID}
                id={v.ID}
                title={v.name}
                image={v.image}
                city={v.city}
              />
            );
          })}
        </div>

        <div className="sub">
          <h2>bike</h2>
          <a href="#viewall">view all {'>'} </a>
        </div>

        <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cardpiki
                key={v.ID}
                id={v.ID}
                title={v.name}
                image={v.image}
                city={v.city}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
