import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import style from './detail.module.css';
import axios from 'axios';
import Header from '../../components/header/Header';

function Details() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://hplussport.com/api/products?id=${params.id}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log('🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err', err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <Image style={{ width: '20rem' }} src={data.image} />
          <div className="desc">
            <h4>{data.name}</h4>
            <p style={{ padding: '0px 0px 5px' }}>{data.description}</p>
            <div
              className="card-footer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h4>${data.price}</h4>
              <Button>Buy</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
