import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Vehicles from './pages/vehicletype/vehicletype';
import Register from './pages/register/register';
import Login from './pages/login/login';

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:ID" element={<Detail />} />
        <Route path="vehicles/detail/:ID" element={<Detail />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
