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
import userService from '../../services/userService.js';

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordRepeat) {
      alert('Passwords do not match');
      return;
    }
    if (!name || !surname || !email || !password || !dateOfRegistration) {
      alert('All fields are required');
      return;
    }
    try {
      const userData = { name, surname, email, password, dateOfRegistration };
      await userService.createUser(userData);
      alert('User created successfully');
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setPasswordRepeat('');
      setDateOfRegistration('');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg section s9">
        <div className="Hoşgeldin">
          <br /><br />
          HOŞ GELDİN
        </div>

        <div className="wrapper">
          <div className="item">
            <h3>Yeni Üyelik</h3><br />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="giriş-yazı">Adın</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

              <label htmlFor="surname" className="giriş-yazı">Soyadın</label>
              <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />

              <label htmlFor="email" className="giriş-yazı">E-posta Adresin</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="password" className="giriş-yazı">Şifren</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <label htmlFor="passwordRepeat" className="giriş-yazı">Şifren(tekrar)</label>
              <input type="password" id="passwordRepeat" name="passwordRepeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />

              <label htmlFor="dateOfRegistration" className="giriş-yazı">Kayıt Tarihi</label>
              <input type="date" id="dateOfRegistration" name="dateOfRegistration" value={dateOfRegistration} onChange={(e) => setDateOfRegistration(e.target.value)} />

              <input type="checkbox" id="rememberMe1" className="rememberMe1" />
              <label htmlFor="rememberMe1" className="rememberLabel1">KAFT tarafından iletişim bilgilerime tanıtım, reklam, kampanya vb. içerikli ticari e-ileti gönderilmesine, sağladığım kişisel verilerin Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni kapsamında bu amaçla işlenmesine ve hizmet sağlayıcılara aktarılmasına izin veriyorum.</label>

              <input type="checkbox" id="rememberMe2" className="rememberMe2" />
              <label htmlFor="rememberMe2" className="rememberLabel1"> Üyelik Sözleşmesi'ni okudum, onaylıyorum. </label>

              <p>Üyeliğiniz sırasında elde edilen kişisel verileriniz, Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni kapsamında işlenmektedir.</p>
              <br />
              <br />
              <button type="submit" className="kaftaüyeol">KAFT'a Üye ol</button><br /><br />
            </form>
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
