import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './detail.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

function Details() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://car-rent-vicky.herokuapp.com/vehicles/${params.id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log('🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err', err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sub">
          <h2>Detail</h2>
        </div>

        <div className={style.content}>
          <img src={data.image} alt={data.name} className={style.image} />
          <div className={style.rightside}>
            <h4>{data.name}</h4>
            <h5>{data.city}</h5>
            <p>
              Available <br /> No repayment
            </p>

            <p>
              Capacity: 1 person <br /> Type: {data.type} <br /> Reservation
              befor: {data.type}{' '}
            </p>

            <p className={style.price}>Rp.78.000/day</p>
          </div>
          <div className={style.newdiv}>
            <Button
              val="Chat admin"
              clrbg="#393939"
              clrfnt="#FFCD61"
              wdth="421px"
            />
            <Button
              val="Reservation"
              clrbg="#FFCD61"
              clrfnt="#393939 "
              wdth="410px"
            />
            <Button val="Like" clrbg="#393939" clrfnt="#FFCD61" wdth="225px" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
