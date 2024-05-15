import React, { useState, useRef } from 'react';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import '../../Css/Login.css';
import arkaplan from '../../images/hediyekartı.jpg';
import resim1 from '../../images/giftcard_1.svg';
import resim2 from '../../images/giftcard_2.svg';
import resim3 from '../../images/giftcard_3.svg';
import resim4 from '../../images/giftcard_4.svg';
import seç from '../../images/seç.png';


function GiftCard() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const dateInputRef = useRef(null);

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.pageYOffset + 800,
            behavior: 'smooth', // smooth kaydırma efekti eklenmiş
        });
        setScrolled(true);
    };
    const HandleScroll = (scrollOffset) => {
        window.scrollTo({
            top: window.pageYOffset + scrollOffset,
            behavior: 'smooth', // smooth kaydırma efekti eklenmiş
        });
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleButtonClick = () => {
        dateInputRef.current.focus();
    };
   

    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${arkaplan})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
                }}
            >
                <br /><br /><br /><br /><br /><br /><br />
                <div style={{ color: 'white', height: '5vh', width: '10%', marginLeft: '80px', marginTop: '20px', float: 'left' }}>
                    <h3>KAFT Gift Card</h3>
                </div>
                <div style={{ color: 'white', height: '20vh', width: '47%', marginLeft: '80px', marginTop: '20px', float: 'left' }}>
                    <h1>Sevdiğin birisi için yüzlerce tasarım ve bir o kadar hikaye arasından doğru olanı seçmekte zorlandığın anlar olabilir.</h1>
                </div>
                <div style={{ color: 'white', height: '15vh', width: '47%', marginLeft: '80px', marginTop: '20px', float: 'left' }}>
                    <h3>İşte böyle anlarda seçimi O’na bırakmak için bir KAFT GIFT CARD gönderebilirsin. Böylelikle KAFT dünyasından dilediği ürüne kendisi karar verebilir.</h3>
                </div>

                <div style={{ position: 'absolute', bottom: '70px', left: '10%', transform: 'translateX(-50%)', float: 'left' }}>

                    <button
                        className={scrolled ? 'scroll-button scrolled' : 'scroll-button'}
                        onClick={handleScrollDown}
                        style={{ bottom: '20px', zIndex: '100', width: '200px', height: '50px', borderRadius: 0 , backgroundColor: '#5faee3', color: 'white' }}
                    >
                        Bir Kart Satın Al
                    </button>
                </div>
            </div>

            <div style={{ background: '#f2f3ef', height: '290vh' }}>
                <br></br><br></br><br></br><br /><br /><br /><br /><br /><br />
                <div style={{ textAlign: 'center' }}>
                    <h1>HEDİYE ETMEK İSTEDİĞİN TUTAR</h1>
                    <h4>4 farklı seçenekten, bütçene göre dilediğini seçebilirsin.</h4>
                    <br></br><br></br><br></br>
                    <div style={{ textAlign: 'center', marginTop: '50px', color: '#ffffff' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                            <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                                <button onClick={() => HandleScroll(700)} style={{ background: 'transparent', border: 'none', padding: '0', margin: '0' }}>
                                    <img src={resim1} alt="Resim 1" style={{ width: '320px', height: '600px' }} />
                                    <h2 style={{ color: 'black', textAlign: 'left' }}>4.000 TL</h2><br></br>
                                    <h3 style={{ color: 'black', textAlign: 'left' }}>İstediği bir tişörtü alması için yeterli olacaktır</h3><br></br>
                                    <img src={seç} style={{ float: 'left' }} />

                                </button>
                            </div>
                            <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                                <button onClick={() => HandleScroll(700)} style={{ background: 'transparent', border: 'none', padding: '0', margin: '0' }}>
                                    <img src={resim2} alt="Resim 2" style={{ width: '320px', height: '600px' }} />
                                    <h2 style={{ color: 'black', textAlign: 'left' }}>4.000 TL</h2><br></br>
                                    <h3 style={{ color: 'black', textAlign: 'left' }}>İstediği bir tişörtü alması için yeterli olacaktır</h3><br></br>
                                    <img src={seç} style={{ float: 'left' }} />
                                </button>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <button onClick={() => HandleScroll(700)} style={{ background: 'transparent', border: 'none', padding: '0', margin: '0' }}>
                                    <img src={resim3} alt="Resim 3" style={{ width: '320px', height: '600px' }} />
                                    <h2 style={{ color: 'black', textAlign: 'left' }}>4.000 TL</h2><br></br>
                                    <h3 style={{ color: 'black', textAlign: 'left' }}>İstediği bir tişörtü alması için yeterli olacaktır</h3><br></br>
                                    <img src={seç} style={{ float: 'left' }} />
                                </button>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <button onClick={() => HandleScroll(700)} style={{ background: 'transparent', border: 'none', padding: '0', margin: '0' }}>
                                    <img src={resim4} alt="Resim 4" style={{ width: '320px', height: '600px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <h2 style={{ color: 'black', textAlign: 'left' }}>4.000 TL</h2><br></br>
                                        <h3 style={{ color: 'black', textAlign: 'left' }}>İstediği bir tişörtü alması için yeterli olacaktır</h3><br></br>
                                        <img src={seç} style={{ textAlign: 'left' }} />

                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <div style={{ textAlign: 'center' }}>
                    <h1>GÖNDERİM TARİHİ</h1><br></br>
                    <h2>Gift Card’ın ne zaman teslim edilmesini istersin?</h2><br></br>
                    <h3>Kaft Gift Card 3.000 TL</h3><br></br><br></br>


                    <div>
                        <input
                            type="dategiftcard"
                            value={selectedDate}
                            onChange={handleDateChange}
                            style={{ marginBottom: '20px' }}
                            ref={dateInputRef}
                        />
                    </div><br></br><br></br>



                    <button onClick={handleButtonClick} className="login-buttongiftgiftcard">
                        devam et
                    </button>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default GiftCard;
