import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
// Kullanılan Resimler
import canta from '../../images/bag.webp';
import bere from '../../images/beanie.webp';
import ceket from '../../images/jacket.webp';
import atlet from '../../images/tank.webp';
import short from '../../images/short_man.webp';
import pantolon from '../../images/pant_man.webp';
import '../../Css/fonts.css';
import '../../Css/Basket.css'; // Yeni eklenen CSS dosyası
// import required modules
import { Autoplay } from 'swiper/modules';
import tasarımlarımızagözat from '../../images/tasarımlarımızagözat.png';
import { useCart } from '../../context/CartContex'; // Kart konteksinin doğru dosya adı
import { Link } from 'react-router-dom';

function Basket() {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productDetails = await Promise.all(
          cart.map(async (id) => {
            const response = await fetch(`/api/products/${id}`);
            if (!response.ok) {
              throw new Error('Ürün bulunamadı.');
            }
            return response.json();
          })
        );
        setProducts(productDetails);
      } catch (error) {
        console.error('Ürün getirme hatası:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (cart.length > 0) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [cart]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  const Titles = {
    title: 'Ürün Adı',
    image: 'Görsel',
    price: 'Fiyat',
    color: 'Renk',
  };

  return (
    <div style={{backgroundColor:'#e3e3e3'}}>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      {cart.length === 0 ? (
        <>
          <h1 style={{ textAlign: 'center' }}>Sepetinde ürün bulunmuyor</h1>
          <div>
            <img
              src={tasarımlarımızagözat}
              alt="tasarımlarımızagözat"
              style={{ height: '152px', width: '677px', display: 'block', margin: 'auto' }}
            />
          </div>
          <br />
        </>
      ) : (
        <div className="basket-table-container">
          <table className="basket-table">
            <thead className="basket-thead">
              <tr>
                {Object.values(Titles).map((title) => (
                  <th key={title} className="basket-th">
                    <h3 className="basket-h3">{title}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="basket-tbody">
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="basket-td">{product.title}</td>
                  <td className="basket-td">
                    <img
                      className="basket-img"
                      style={{ width: '100px', height: '100px' }}
                      src={`/${product.image}`}
                      alt={product.title}
                      onError={(e) => {
                        console.error("Error loading image:", e.target.src);
                        e.target.onerror = null;
                        e.target.src = "/images/fallback-image.jpg";
                      }}
                    />
                  </td>
                  <td className="basket-td">{product.price}</td>
                  <td className="basket-td">{product.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link to="/">
        <div style={{ textAlign: 'center' }}>Alışverişe Devam Et</div>
      </Link>

      <div style={{ background: '#f2f3ef', height: '120vh' }}>
        <br />
        <br />
        <br />

        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 1200 }}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={canta} alt="bag" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Çanta
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={bere} alt="beanie" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Bere
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={ceket} alt="jacket" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Ceket
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={atlet} alt="tank" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Atlet
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={short} alt="short" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Şort
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ height: '65%', width: '65%' }} src={pantolon} alt="pant" />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',
                  }}
                >
                  Pantolon
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Basket;
