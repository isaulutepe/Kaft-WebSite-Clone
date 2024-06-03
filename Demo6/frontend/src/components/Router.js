// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import Login from './HomePage/Login';
import ContactPage from '../pages/ContactPage';
import KampanyaliUrunler from '../pages/KampanyaliUrunler';
import GiftCard from './HomePage/GiftCard';
//import Login from '../HomePage/Login';
// Diğer sayfalarınızı burada import edin
import Basket from './HomePage/Basket';

import CategoryUpdate from '../components/AdminPage/CategoryUpdate';
import ProductUpdate from '../components/AdminPage/ProductUpdate';
import CustomerUpdate from '../components/AdminPage/CustomerUpdate';
import AdressUpdate from '../components/AdminPage/AdressUpdate';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/kampanyaliurunler" element={<KampanyaliUrunler />} />
            <Route path="/GiftCard" element={<GiftCard />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/admin/update/category/:id" element={<CategoryUpdate />} />
            <Route path="/admin/update/product/:id" element={<ProductUpdate />} />
            <Route path="/admin/update/customer/:id" element={<CustomerUpdate />} />
            <Route path="/admin/update/adress/:id" element={<AdressUpdate />} />

            {/* // Diğer rotalarınızı burada ekleyin */}
        </Routes>
    );
};

export default RoutesComponent;

