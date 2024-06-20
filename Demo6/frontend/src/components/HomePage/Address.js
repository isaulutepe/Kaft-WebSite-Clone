import React, { useState } from "react";
import "../../Css/Address.css";
import axios from "axios";
function AddressField(props) {
  return (
    <div className="field">
      <label className="label">{props.name}</label>
      <div className="control">
        <input
          className={`input ${props.className}`}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

function AddressForm() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3000/api/address', {
            address,
            postalCode,
            city,
            country
        });
        // Başarıyla eklendiğinde kullanıcıya bildirim veya yönlendirme yapılabilir
        console.log('Address added successfully');
    } catch (err) {
        console.error('Error adding address:', err);
    }
};

  return (
    <form className="form-container" onSubmit={handleSubmit}> {/* Yeni eklenen container */}
      <div className="box">
        <AddressField
          name="Adres"
          type="text"
          placeholder="eg. Menteşe/Muğla"
          className="small-input"
        />
        <AddressField
          name="Posta kodu"
          type="number"
          placeholder=""
          className="small-input"
        />
        <div className="field">
          <label>Şehir:</label>
          <div className="control">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="large-select"
            >
              <option value="">Şehir Seçin</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
              {/* Diğer şehirler */}
            </select>
          </div>
        </div>
        <div className="field">
          <label>Ülke:</label>
          <div className="control">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="large-select"
            >
              <option value="">Ülke Seçin</option>
              <option value="turkey">Türkiye</option>
              <option value="usa">Amerika Birleşik Devletleri</option>
              <option value="uk">Birleşik Krallık</option>
              {/* Diğer ülkeler */}
            </select>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Ekle</button>
            <button className="button is-link">Güncelle</button>
            <button className="button is-link">Sil</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddressForm;
