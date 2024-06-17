import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AddCustomer from './components/AdminPage/AddCustomer'
import Singup from './components/HomePage/Login'
import ContactPage from './pages/ContactPage';
import KampanyaliUrunler from './pages/KampanyaliUrunler';
import GiftCard from './components/HomePage/GiftCard';
import PasswordReset from './components/HomePage/PasswordResetRequest';
import Productlar from './components/Products/Productlar';
import Details from './components/Products/Details';
import AddProduct from './components/AdminPage/AddProduct';
import SplashScreen from './components/SplashScreen';
import Basket from './components/HomePage/Basket';

function App() {


  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  useEffect(() => {
  // Simulating a loading delay
  const timer = setTimeout(() => {
    setIsFading(true); // Fade out başlat
    setTimeout(() => {
      setLoading(false); // Loading durumunu false yap
    }, 1000); // Fade out süresi ile aynı olmalı
  }, 3000); // 3 saniye sonra fade out başlat

  return () => clearTimeout(timer);
}, []);

  
  if (loading){
    return (
      <BrowserRouter>
        <div className="App">
          {loading ? <SplashScreen isFading={isFading} /> : <Routes />}
        </div>
      </BrowserRouter>
    );

  } else {

        return (
      <div className="App">
        
          <BrowserRouter>
            <div className="pages">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/admin"
                  element={
                    <AdminPage />
                  }
                />
                <Route
                  path="/singup"
                  element={
                    <Singup />
                  }
                />
                <Route
                  path="/admin/addcustomer"
                  element={
                    <AddCustomer />
                  }
                />
                <Route
                  path="/iletisim"
                  element={
                    <ContactPage />
                  }
                />
                <Route
                  path="/kampanyaliurunler"
                  element={
                    <KampanyaliUrunler />
                  }
                />
                <Route
                  path="/GiftCard"
                  element={
                    <GiftCard />
                  }
                />
                 <Route
                  path="/admin/addproduct"
                  element={
                    <AddProduct />
                  }
                />
                <Route path="/product" element={<Productlar />} />
                <Route path="/product/:id" element={<Details />} />

                <Route
                  path="/PasswordReset"
                  element={
                    <PasswordReset />
                  }
                />
                  <Route
                  path="/basket"
                  element={
                    <Basket />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
      
      </div>
    );
  }
}
export default App;
