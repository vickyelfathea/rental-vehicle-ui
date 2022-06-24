import styled from 'styled-components';

export const Card = styled.div`
  height: 337px;
  width: 260px;
  background-color: pink;
  font-size: 1.5em;
  color: white;
  border-radius: 10px;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-image: url('${({ bg }) => bg}');
  background-size: cover;
  background-position: center;
  display: flex;
  padding: 0px;
  margin-bottom: 20px;

  div {
    background-color: white;
    align-self: flex-end;
    border-top-right-radius: 10px;
    height: 56px;
    width: 120px;
    color: black;

    h4 {
      padding-top: 3px;
      font-size: 17px;
      font-weight: 900;
      overflow: hidden;
      white-space: nowrap; /* Don't forget this one */
      text-overflow: ellipsis;
    }

    p {
      font-size: 15px;
    }
  }
`;
