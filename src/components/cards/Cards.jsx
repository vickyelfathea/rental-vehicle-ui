import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Cards(props) {
  const navigasi = useNavigate();

  const goto = () => {
    navigasi('/detail');
  };

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Link to={`/detail/${props.id}`}>
          <Card.Title>{props.title}</Card.Title>
        </Link>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary" onClick={goto}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
