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
      
        <h3 style={{ color: 'black', float: 'left', marginRight: '580px', fontFamily: 'Font1',marginTop:'-25px' }}>Üyelik</h3>
        <br></br>
        
        {/* Giriş yap formu */}

        <form>
          {/* Kullanıcı adı */}
          <label htmlFor="username" className="labelgiriş">E-posta</label>
          <input type="texti" id="username" name="username" className="input" />
         

          {/* Şifre */}
          <label htmlFor="password" className="labelgiriş">Şifre</label>
          <input type="ipassword" id="password" name="password" className="input" />
          

          {/* "Beni Hatırla" metni */}
          <input type="checkbox" id="rememberMe" className="irememberMe" />
          <label htmlFor="rememberMe" className="irememberLabel">Beni Hatırla</label>

          <a href="#" className="şifreyiunuttum">Şifremi Unuttum</a>
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
