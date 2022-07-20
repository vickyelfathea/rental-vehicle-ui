import React, { useState, useRef } from 'react';
import useApi from '../../helpers/useApi';

const Register = () => {
  const [Users, setUsers] = useState({
    username: 'username',
    password: 'password',
  });

  const api = useApi();

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...Users };
    data[event.target.name] = event.target.value;
    setUsers(data);
  };

  const daftar = () => {
    api
      .requests({
        method: 'POST',
        url: '/users/',
        data: Users,
      })
      .then((res) => {
        console.log('file: signup line 27', res);
      })
      .catch((err) => {
        console.log('file: signup line 30', err);
      });
  };

  return (
    <>
      <h4>register</h4>
      <div>
        {' '}
        usernmae
        <input
          type="text"
          onChange={onChangeInput}
          name="username"
          autoComplete="off"
        />
      </div>{' '}
      password
      <input
        type="text"
        onChange={onChangeInput}
        name="password"
        autoComplete="off"
      />
      <button onClick={daftar} type="button">
        {' '}
        submit
      </button>
    </>
  );
};

export default Register;
