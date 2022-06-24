import styled from 'styled-components';
import foto from '../hero/cloud-sky.jpg';

export const Hero = styled.div`
  height: 767px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url('${foto}');
  //   background-color: pink;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  h1 {
    color: white;
    font-family: Playfair Display;
    font-size: 64px;
    padding-left: 10px;
    padding-top: 100px;
    width: 400px;
    word-wrap: break-word;
    position: relative;
  }

  p {
    color: white;
    font-weight: 900;
    font-size: 22px;
    padding: 10px 20px;
    margin-top: 50px;
    width: 400px;
    word-wrap: break-word;
    position: relative;
  }

  select {
    width: 220px;
    height: 52px;
    padding-left: 30px;
    margin-left: 30px;
    border-radius: 6px;
    font-weight: 900;
    text-transform: capitalize;
    opacity: 0.5;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(50deg, transparent 10%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 5px),
      calc(100% - 15px) calc(1em + 5px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 4px, 5px 4px, 1px 2em;
    background-repeat: no-repeat;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 35px;

  select:first-child {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
background-color: #FFCD61;
text-transform:capitalize;
width: 180px;
height: 52px;
margin-left: 10px;
margin-top: 52px;
border-radius: 6px;
font-weight: 900;
  }
`;
