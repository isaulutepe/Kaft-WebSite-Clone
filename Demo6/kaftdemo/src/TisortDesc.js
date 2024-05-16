import React from 'react';
import Navbar from './components/HomePage/Navbar';
import "./TisortPage.css"
import shirt_1 from "./images/1.jpg"
import Footer from './components/HomePage/Footer';
import "./TisortDesc.css"



const TisortDesc = () => {
  return (
    <div className='tshirt'>

      <div className="tshirt-top-promo">
        <p>Ücretsiz ve hızlı kargo + koşulsuz 365 gün değişim / iade garantisi. Detay</p>
      </div>

      <Navbar />

      <div className="tshirt-card">
        <img src={shirt_1} alt={"Biz"} className="tshirt-image" />
        <div className="tshirt-info" style={{ background: "white" }}>
          <h1>43rd Istanbul Film Festival</h1>
          <div className="tshirt-hover-overlay" >
            <p className='txt'>Görüntüyü çerçeveleyen bu sınırlar, görünmeyene de dairdir.</p>
            <p className='product'>Renk: Siyah</p>
            <p className='product'>Cinsiyet: Unisex</p>
            <p className='product'>Stil: Regular Tişört</p>
            <p className='size-txt'>Beden</p>
            <p className='size'>XS</p>
            <p className='size'>S</p>
            <p className='size'>M</p>
            <p className='size'>L</p>
            <p className='size'>XL</p>

            <span class="dot">
              <span className='in-dot'></span>
            </span>

            <div className='content'>
              <p>Kumaş kalitesi</p>
              <p>Baskı kalitesi</p>
              <p>Detaylar</p>
              <p>Sürdürülebilirlik</p>
              <p>İade ve Değişim</p>
            </div>
            <div className="price-button-container">
              <span className="price">700 TL</span>
              <button className="add-to-cart-button">Sepete Ekle</button>
            </div>
          </div>

        </div>

      </div>
      <div className='footer'>
        <Footer/>

      </div>
    </div>
  );
}

export default TisortDesc;
