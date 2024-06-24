import React from 'react';
import Navbar from '../components/Navbar2';
import '../Css/KampanyaliUrunler.css';
import Footer from '../components/Footer';
function KampanyaliUrunler() {
    const discountedProducts = []; // Kampanyalı Ürün bilgisi buradan girilecek
    return (
        <div>
            <div className="App">
                <div className="Navbar"><Navbar /></div>
        <div className="Listeleme">
            {/* Check if there are discounted products */}
            {discountedProducts.length > 0 ? (
                <div>
                    {/* Render discounted products */}
                    <h2>Kampanyalı Ürünler</h2>
                    <ul>
                        {discountedProducts.map(product => (
                            <li key={product.id}>{product.name} - {product.price}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    {/* If no discounted products, display a message */}
                    <p>Kampanyalı ürün bulunamadı</p>
                </div>
            )}</div>
        </div><Footer/></div>
    );
}

export default KampanyaliUrunler;
