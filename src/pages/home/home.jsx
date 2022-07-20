import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './home.module.css';
import axios from 'axios';
import { addUsers } from '../../store/reducer/users';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Cardpiki from '../../components/cardpiki/Cardpiki';
import Cardtesti from '../../components/cardpiki/Cardtesti';
import Footer from '../../components/footer/Footer';
import useApi from '../../helpers/useApi';

function Home() {
  const [prod, setProd] = useState([]);
  const { isAuth } = useSelector((state) => state.users);

  const api = useApi();
  const dispatch = useDispatch();

  const getDataProd = async () => {
    api
      .requests({
        method: 'GET',
        url: '/vehicles/',
      })
      .then((res) => {
        const { data } = res.data;
        setProd(data);
      })
      .catch((err) => console.log(err));
  };

  const getUsers = async () => {
    api
      .requests({
        method: 'GET',
        url: '/users',
      })
      .then((res) => {
        const { data } = res.data;
        dispatch(addUsers(data));
      })
      .catch((err) => console.log(err));
  };

  // didmount
  useEffect(() => {
    getDataProd();
    if (isAuth) {
      getUsers();
    }
  }, []);

  return (
    <>
      <Header home="bold" />
      <Hero />
      <div className={style.container}>
        <div className="sub">
          <h2>popular in towns</h2>
          <a href="/vehicles">view all {'>'} </a>
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
          <Cardtesti backdrop="https://i.pinimg.com/736x/0a/6b/0f/0a6b0fa2770cfad622884fd241c9f628.jpg" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
