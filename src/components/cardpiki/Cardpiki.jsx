import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../styled/Card.styled';

function Cardpiki(props) {
  const navigasi = useNavigate();

  const goto = () => {
    navigasi('/detail');
  };
  return (
    <>
      <Card bg={props.image}>
        <div>
          <h4>{props.title}</h4>
          <p>{props.city}</p>
        </div>
      </Card>
    </>
  );
}

export default Cardpiki;
