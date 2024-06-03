import React from 'react';
import { useParams } from 'react-router-dom';
import { adressData } from './adressData';
import '../../Css/updateForms.css';

function UpdatePage() {
    let { id } = useParams();

    // id'ye göre kategoriyi bul
    const adress = adressData.find(adress => adress.id === parseInt(id));

    return (
        <div className='formBody'>
            <h2>Update Adress With Id: {id}</h2>
            <br></br>
            {/* <p>Updating category with ID: {id}</p> */}
            {/* Kategoriyi güncelleme işlemleri */}
            {adress ? (
                <form>
                    <label>
                        Adress Id:
                        <input type='text' defaultValue={adress.id} />
                    </label>
                    <label>
                        User Id:
                        <input type="text" defaultValue={adress.userId} />
                    </label>
                    <label>
                        Adress Line:
                        <input type="text" defaultValue={adress.adressLine} />
                    </label>
                    <label>
                        City:
                        <input type="text" defaultValue={adress.city} />
                    </label>
                    <label>
                        Postal Code:
                        <input type="text" defaultValue={adress.postalCode} />
                    </label>
                    <label>
                        County:
                        <input type="text" defaultValue={adress.country} />
                    </label>
                    <button className='updatebtn' type="submit">Update</button>
                </form>
            ) : (
                <p>Adress not found.</p>
            )}
        </div>
    );
}

export default UpdatePage;
