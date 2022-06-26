import React, { useState, useEffect } from 'react';
import style from './home.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Cardpiki from '../../components/cardpiki/Cardpiki';
import Footer from '../../components/footer/Footer';

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
      <Hero />
      <div className={style.container}>
        <div className="sub">
          <h2>popular in towns</h2>
          <a href="#viewall">view all {'>'} </a>
        </div>

        <div className="content">
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

        <div className={style.sub}>
          <h2>testimonials</h2>
        </div>

        <div className="testimoni">
          <div>
            "it was the right decision to rent vehicle here, I spent less money
            and enjoy the trip. It was an amazing experience to have a ride for
            wildlife trip!"
            <span className="name">
              <br />
              <br /> Edward Newgate
            </span>
            <br /> Founder Circle
          </div>
          <Cardpiki backdrop="https://i.pinimg.com/736x/0a/6b/0f/0a6b0fa2770cfad622884fd241c9f628.jpg" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
