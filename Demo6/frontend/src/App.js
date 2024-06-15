import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AddCustomer from './components/AdminPage/AddCustomer'
import Singup from './components/HomePage/Login'
import ContactPage from './pages/ContactPage';
import KampanyaliUrunler from './pages/KampanyaliUrunler';
import GiftCard from './components/HomePage/GiftCard';
import Basket from './components/HomePage/Basket';
import PasswordReset from './components/HomePage/PasswordResetRequest';

function App() {
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
              path="/Basket"
              element={
                <Basket />
              }
            />
            <Route
              path="/PasswordReset"
              element={
                <PasswordReset />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
