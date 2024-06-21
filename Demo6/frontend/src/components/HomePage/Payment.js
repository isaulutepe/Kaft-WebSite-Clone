import React, { useState, useEffect } from 'react';
import '../../Css/Payment.css';
import chip from '../../images/chip.png';
import aprox from '../../images/aprox.png';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        adress: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        })
    }
    const handleSubmitTwo = (e) => {
        e.preventDefault();
        console.log(details);
    }
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [validThru, setValidThru] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formattedInput);
    };

    const handleCardHolderChange = (event) => {
        setCardHolder(event.target.value.toUpperCase());
    };

    const handleValidThruChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim().slice(0, 5);
        setValidThru(formattedInput);
    };

    const handleCvvChange = (event) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, '').slice(0, 3);
        setCvv(formattedInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Ödeme başarıyla gerçekleşti.");
        navigate("/"); // Anasayfaya yönlendirme yapılıyor
    };

    const handleAddAddress = () => {
        alert("Adres ekleme butonuna tıklandı!");
        navigate("/address"); // Adres ekleme sayfasına yönlendirme yapılıyor
    };
    const [addressInfo, setAddressInfo] = useState(null);

    useEffect(() => {
        // sessionStorage'den adres bilgilerini al
        const storedAddressInfo = sessionStorage.getItem('addressInfo');
        if (storedAddressInfo) {
            setAddressInfo(JSON.parse(storedAddressInfo));
            // sessionStorage'deki bilgileri temizle (isteğe bağlı)
            sessionStorage.removeItem('addressInfo');
        }
    }, []);
    return (
        <main className="container">
            <section className="ui">
                <div className="container-left">
                    <form id="credit-card" onSubmit={handleSubmit}>
                        <div className="number-container">
                            <label>Kart Numarası</label>
                            <input
                                type="text"
                                name="card-number"
                                id="card-number"
                                maxLength="19"
                                placeholder="1234 5678 9101 1121"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                required
                            />
                        </div>
                        <div className="name-container">
                            <label>İsim</label>
                            <input
                                type="text"
                                name="name-text"
                                id="name-text"
                                maxLength="30"
                                placeholder="SENA YILDIZ"
                                value={cardHolder}
                                onChange={handleCardHolderChange}
                                required
                            />
                        </div>
                        <div className="infos-container">
                            <div className="expiration-container">
                                <label>Valid-thru</label>
                                <input
                                    type="text"
                                    name="valid-thru-text"
                                    id="valid-thru-text"
                                    maxLength="5"
                                    placeholder="02/40"
                                    value={validThru}
                                    onChange={handleValidThruChange}
                                    required
                                />
                            </div>
                            <div className="cvv-container">
                                <label>CVV</label>
                                <input
                                    type="text"
                                    name="cvv-text"
                                    id="cvv-text"
                                    maxLength="3"
                                    placeholder="123"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    required
                                />
                            </div>


                        </div>
                        <div className="adress-container">
                            <label>Adres</label>
                            {addressInfo ? (
                                <input
                                    type="text"
                                    name="address"
                                    className="address-input"
                                    value={`${addressInfo.address}, ${addressInfo.postalCode}, ${addressInfo.city}, ${addressInfo.country}`}
                                    readOnly
                                />
                            ) : (
                                <span>Adres bilgisi bulunamadı.</span>
                            )}
                            <button onClick={() => window.location.href = '/address'}>Adres Düzenle</button>
                        </div>

                        <input type="submit" value="Ödeme Yap" id="add" />
                    </form>
                </div>
                <div className="container-right">
                    <div className="card-btn">
                        <div className="intern">
                            <img className="approximation" src={aprox} alt="aproximation" />
                            <div className="card-number">
                                <div className="number-vl">{cardNumber}</div>
                            </div>
                            <div className="card-holder">
                                <label>Holder</label>
                                <div className="name-vl">{cardHolder}</div>
                            </div>
                            <div className="card-infos">
                                <div className="exp">
                                    <label>valid-thru</label>
                                    <div className="expiration-vl">{validThru}</div>
                                </div>
                                <div className="cvv">
                                    <label>CVV</label>
                                    <div className="cvv-vl">{cvv}</div>
                                </div>
                            </div>
                            <img className="chip" src={chip} alt="chip" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Payment;
