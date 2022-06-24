import React, { useState, useEffect } from 'react';
import style from './home.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Cards from '../../components/cards/Cards';

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
        <h1>Content</h1>
        <br />
        <div className={style.content}>
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
        </div>
      </div>
    </>
  );
}

export default Home;
