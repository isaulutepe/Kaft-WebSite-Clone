import React from 'react';
import { useParams } from 'react-router-dom';
import { usersData } from './customerData';
import '../../Css/updateForms.css';

function UpdatePage() {
    let { id } = useParams();

    // id'ye göre kategoriyi bul
    const customer = usersData.find(customer => customer.id === parseInt(id));

    return (
        <div className='formBody'>
            <h2>Update Customer With Id: {id}</h2>
            <br></br>
            {/* <p>Updating category with ID: {id}</p> */}
            {/* Kategoriyi güncelleme işlemleri */}
            {customer ? (
                <form>
                    <label>
                        Customer Id:
                        <input type='text' defaultValue={customer.id} />
                    </label>
                    <label>
                        Customer Name:
                        <input type="text" defaultValue={customer.name} />
                    </label>
                    <label>
                        Customer Surname:
                        <input type="text" defaultValue={customer.surname} />
                    </label>
                    <label>
                        Customer Eposta:
                        <input type="text" defaultValue={customer.eposta} />
                    </label>
                    <label>
                        Adress Id:
                        <input type="text" defaultValue={customer.adressId} />
                    </label>
                    <label>
                        Customer Date:
                        <input type="text" defaultValue={customer.date} />
                    </label>


                    <button type="submit">Update</button>
                </form>
            ) : (
                <p>Customer not found.</p>
            )}
        </div>
    );
}

export default UpdatePage;
