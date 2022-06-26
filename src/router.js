import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Vehicles from './pages/vehicletype/vehicletype';

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:ID" element={<Detail />} />
        <Route path="vehicles/detail/:ID" element={<Detail />} />
        <Route path="vehicles" element={<Vehicles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
