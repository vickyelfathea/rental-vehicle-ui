import React, { useState, useEffect } from 'react';
import style from './home.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Cards from '../../components/cards/Cards';
import Cardpiki from '../../components/cardpiki/Cardpiki';

function Home() {
  const [prod, setProd] = useState([]);

  const getDataProd = async () => {
    try {
      const { data } = await axios.get('https://hplussport.com/api/products');
      setProd(data);
      console.log(data);
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
      <Hero />
      <div className={style.container}>
        <div className={style.sub}>
          <h2>popular in town</h2>
          <a href="#njsdn">view all {'>'} </a>
        </div>

        <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cardpiki
                key={v.id}
                id={v.id}
                title={v.name}
                image={v.image}
                desc={v.description}
              />
            );
          })}
        </div>

        {/* <Cardpiki /> */}

        <br />
        {/* <div className={style.content}>
          {prod.map((v) => {
            return (
              <Cards
                key={v.id}
                id={v.id}
                title={v.name}
                image={v.image}
                desc={v.description}
              />
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Home;
