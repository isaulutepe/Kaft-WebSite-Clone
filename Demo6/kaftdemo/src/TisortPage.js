import React from 'react'
import TisortData from './TisortData'
import "./TisortPage.css";
import Navbar from "./components/HomePage/Navbar"
import Footer from "./components/HomePage/Footer"
import { FaFilter } from 'react-icons/fa'; // Filtre ikonunu ekleyin
import { Link } from 'react-router-dom';
const TisortPage = () => {
  return (
    <div className='page'>
      <div class="top-promo">
        <p>Ücretsiz ve hızlı kargo + koşulsuz 365 gün değişim / iade garantisi. Detay</p>
      </div>

      <Navbar />

      <div class="bottom-categories">
        <p>Tümü</p>
        <p>Relax</p>
        <p>Sketch</p>
        <p>Regular</p>
        <p>Urban</p>
        <p className='product'>13 Ürün</p>

        <div className='span-container'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='filter-container'>
          <FaFilter /> {/* Filtre ikonunu ekleyin */}
          <p style={{ color: "black" }}>Filtre</p>
        </div>


      </div>



      <div className='mainContainer'>
        {
          TisortData.map(({ id, image, title, price, midText, path, headText }) => {
            return (
              <Link to={path}>
                <div className='card'>
                  <img src={image} alt='' />
                  <div className='desc'>
                    <h1>{title}</h1>
                    <span>{price} TL</span>
                  </div>

                  <div className='hover-overlay'>
                    <h2 style={{ color: "black" }}>{headText}</h2>
                    <p style={{ color: "black", fontSize: "auto" }}>{midText}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
      <Footer />
    </div>

  )
}

export default TisortPage
