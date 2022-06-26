import React from 'react';
import { Btn } from '../styled/Button.styled';

const Button = (props) => {
  return (
    <>
      <Btn clrbg={props.clrbg} clrfnt={props.clrfnt} wdth={props.wdth}>
        {props.val}
      </Btn>
    </>
  );
};

export default Button;
