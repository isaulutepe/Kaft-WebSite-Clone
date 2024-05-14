// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import AdminPage from '../AdminPage';
import Login from './HomePage/Login';
import ContactPage from '../ContactPage';
import KampanyaliUrunler from '../KampanyaliUrunler';
//import Login from '../HomePage/Login';
// Diğer sayfalarınızı burada import edin

const RoutesComponent = () => {
    return (       
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/iletisim" element={<ContactPage/>} />
            <Route path="/kampanyaliurunler" element={<KampanyaliUrunler/>} />
      {/* // Diğer rotalarınızı burada ekleyin */}
        </Routes>
    );
};

export default RoutesComponent;

