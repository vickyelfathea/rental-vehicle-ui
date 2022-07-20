import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../helpers/useApi';
import { login } from '../../store/reducer/users';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [Users, setUsers] = useState({
    username: 'username',
    password: 'password',
  });

  const { isAuth } = useSelector((state) => state.users);

  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  const onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...Users };
    data[event.target.name] = event.target.value;
    setUsers(data);
  };

  const goLogin = () => {
    api
      .requests({
        method: 'POST',
        url: '/auth/log',
        data: Users,
      })
      .then((res) => {
        const { data } = res.data;
        dispatch(login(data.token));
        console.log('file: signup line 27', data);
      })
      .catch((err) => {
        console.log('file: signup line 30', err);
      });
  };

  return (
    <>
      <h4>login</h4>
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
      <button onClick={goLogin} type="button">
        {' '}
        submit
      </button>
    </>
  );
};

export default Login;
