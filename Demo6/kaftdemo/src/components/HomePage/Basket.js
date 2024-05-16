import React from 'react';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
// Kullanılan Resimler
import canta from '../../images/bag.webp'
import bere from '../../images/beanie.webp'
import ceket from '../../images/jacket.webp'
import atlet from '../../images/tank.webp'
import short from '../../images/short_man.webp'
import pantolon from '../../images/pant_man.webp'
import '../../Css/fonts.css'
// import required modules
import { Autoplay } from 'swiper/modules';
import '../../Css/main.css';
import tasarımlarımızagözat from '../../images/tasarımlarımızagözat.png';


function Basket() {
  return (
    <div>
      <Navbar />



      <div style={{ background: '#f2f3ef', height: '120vh' }}>
        <br></br><br></br><br></br>


        <h1>  Sepetinde ürün bulunmuyor</h1>
        {/* Boşluk bırakmak için */}<br></br>
        

        <>
          <div>
          <img src={tasarımlarımızagözat} alt="tasarımlarımızagözat" style={{ height: '152px',width: '677px' }}/>
          </div><br></br>
        

          
          <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: '1200' }}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>

              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'bag', height: '65%', width: '65%' }} src={canta} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Çanta</div>
              </div>


            </SwiperSlide>
            <SwiperSlide>

              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'beanie', height: '65%', width: '65%' }} src={bere} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Bere</div>
              </div>


            </SwiperSlide>
            <SwiperSlide>

              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'jacket', height: '65%', width: '65%' }} src={ceket} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Ceket</div>
              </div>



            </SwiperSlide>
            <SwiperSlide>

              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'tank', height: '65%', width: '65%' }} src={atlet} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Atlet</div>
              </div>


            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'short', height: '65%', width: '65%' }} src={short} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Şort</div>
              </div>


            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img style={{ alt: 'pant', height: '65%', width: '65%' }} src={pantolon} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
                }}>Pantolon</div>
              </div>


            </SwiperSlide>

          </Swiper>
          </div  >
        </>




      </div>
      <Footer />



    </div>
  )
}

export default Basket
