import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import "../../Css/Login.css";
import girişyaplogo from '../../images/girişyaplogo.jpg.png';
import resim1 from '../../images/resim1.png';
import resim2 from '../../images/resim2.png';
import resim3 from '../../images/resim3.png';
import resim4 from '../../images/resim4.png';
import resim5 from '../../images/resim5.png';
import Footer from '../HomePage/Footer.js';




const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Modal dışına tıklandığında modalı kapat <img src={menuwhite}
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
     <Navbar/>
      <div className="bg section s9">
        <div className="Hoşgeldin">
          <br /><br />
          HOŞ GELDİN
        </div>
        <div className="headertextS9"></div>
        <div className="wrapper">
          <div className="item">
            <h3>Yeni Üyelik</h3><br />
            <label htmlFor="adın">Adın</label><br />
            <input type="text" id="adın" name="adın" /><br /><br />

            <label htmlFor="soyad">Soyadın</label><br />
            <input type="text" id="soyad" name="soyad" /><br /><br />

            <label htmlFor="posta">E-posta Adresin</label><br />
            <input type="email" id="posta" name="posta" /><br /><br />

            <label htmlFor="şifre">Şifren</label><br />
            <input type="password" id="şifre" name="şifre" /><br /><br />

            <label htmlFor="şifreTekrar">Şifren (tekrar)</label><br />
            <input type="password" id="şifreTekrar" name="şifreTekrar" /><br /><br />

            <input type="checkbox" id="rememberMe1" name="rememberMe1" />
            <label htmlFor="rememberMe1">KAFT tarafından iletişim bilgilerime tanıtım, reklam, kampanya vb.
              içerikli ticari e-ileti gönderilmesine, sağladığım kişisel verilerin Kişisel Verilerin
              Korunmasına İlişkin Aydınlatma Metni kapsamında bu amaçla işlenmesine ve hizmet sağlayıcılara
              aktarılmasına izin veriyorum.</label><br /><br />

            <input type="checkbox" id="rememberMe2" name="rememberMe2" />
            <label htmlFor="rememberMe2"> Üyelik Sözleşmesi'ni okudum, onaylıyorum. </label><br /><br />

            <p>Üyeliğiniz sırasında elde edilen kişisel verileriniz, Kişisel Verilerin Korunmasına İlişkin
              Aydınlatma Metni kapsamında işlenmektedir.</p>
            <br />
            <br />
            <button className="kaftaüyeol">KAFT'a Üye ol</button><br /><br />

            <a href="#" className="girişyapbutton" onClick={toggleModal}>Giriş yap</a><br /><br />

            <span className="üyeliğimvar">Daha önceden üyeliğim var</span>



          </div>



          <div className="item">
            <figure className="girişyaplogo">
              <img src={girişyaplogo} alt="Giriş Yap Logo" />
            </figure>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim1} alt="Seni KAFT dünyasından haberdar ederiz." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Seni KAFT dünyasından haberdar ederiz.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim2} alt="Kampanya ve indirimlerimizden öncelikli yararlanırsın." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Kampanya ve indirimlerimizden öncelikli yararlanırsın.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim3} alt="Yeni bir ürün veya tasarım geliştirirken fikir almak istediğimizde, öncelikle sana danışırız." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Yeni bir ürün veya tasarım geliştirirken fikir almak istediğimizde, öncelikle sana danışırız.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim4} alt="KAFT etkinliklerinde seni önceden bilgilendiririz ve özel davetlilerimiz arasında olabilirsin." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>KAFT etkinliklerinde seni önceden bilgilendiririz ve özel davetlilerimiz arasında olabilirsin.</figcaption>
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="img-figure">
                      <img src={resim5} alt="Üniversite öğrencilerine özel %20 indirimden yararlanabilirsin. Tek yapman gereken “edu.tr” uzantılı mail adresin ile üye olmak." />
                    </figure>
                  </td>
                  <td>
                    <figcaption>Üniversite öğrencilerine özel %20 indirimden yararlanabilirsin. Tek yapman gereken “edu.tr” uzantılı mail adresin ile üye olmak.</figcaption>
                  </td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
        <div style={{
        display: 'block',
        width: '100%',
        height: '20vh'
      }}></div>
      </div>
      
      <Footer />

    </div>
  );
};

export default Login;
