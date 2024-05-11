// LoginModal.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Login.css'
import '../HomePage/Login.js';

function LoginModal({ onClose, show, toggleModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Giriş işlemini burada gerçekleştirin

    onClose();
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <br />
        <h3 style={{color: 'black', float: 'left', marginLeft: '10px', fontFamily: 'Font1'}}>Üyelik</h3>
        {/* Giriş yap formu */}
        <br />  <br />  <br />
        <form>
          {/* Kullanıcı adı */}
          <label htmlFor="username" className="labelgiriş">E-posta</label><br />
          <input type="text" id="username" name="username" className="input" /><br />

          {/* Şifre */}
          <label htmlFor="password" className="labelgiriş">Şifre</label><br />
          <input type="password" id="password" name="password" className="input" /><br /><br />

          {/* "Beni Hatırla" metni */}
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="rememberLabel">Beni Hatırla</label>

          <a href="#" className="şifreyiunuttum">Şifremi Unuttum</a><br /><br />
          <input type="submit" value="Giriş Yap" className="login-button" />

        </form>
        <br />

        <div className="button-container">
          {/* Facebook ile giriş */}
          <div className="square-button">
            <button>Facebook ile Giriş</button>
          </div>
          {/* Google ile giriş */}
          <div className="square-button">
            <button>Google ile Giriş</button>
          </div>
          {/* Üye ol */}
          <div className="square-button">
            <Link to="/login">üye ol</Link>
          </div>
        </div>
      </div>
      <div className="login-modal-background" onClick={onClose} />
    </div>
  );
}

export default LoginModal;
