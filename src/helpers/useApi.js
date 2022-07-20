import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function useApi(urls = '') {
  const { token } = useSelector((state) => state.users);

  const [requests, setRequests] = useState({
    baseURL: 'https://car-rent-vicky.herokuapp.com/' || urls,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const setConfig = () => {
    setRequests({
      ...requests,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    setConfig();
  }, []);

  return { requests: axios.create(requests) };
}

export default useApi;
