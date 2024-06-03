import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link componentini ekleyin
import adressService from '../services/adressService';


const Titles =
{
    "AdressId": "Adress Id",
    "UserId": "User Id",
    "AdressLine": "Adress Line",
    "City": "City",
    "PostalCode": "Postal Code",
    "County": "County",
    "Update": "Update",
    "Delete": "Delete"
};;

const AdressesComponent = () => {
    const [adresses, setAdresses] = useState([]);

    useEffect(() => {
        adressService.getAdresses()
            .then(response => {
                setAdresses(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <div style={{ margin: '10%' }}>
            <h1>Admin Panel</h1>
            <h2>Adress List</h2>
            <div>
                <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                    Add New Adress:
                </h4>
                <button className="button" role="button">
                    Add Adress
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        {Object.values(Titles).map((title) => (
                            <th key={title}>
                                <h3>{title}</h3>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {adresses.map((adress) => (
                        <tr key={adress.AddressID}>
                            <td>{adress.AddressID}</td>
                            <td>{adress.UserID}</td>
                            <td>{adress.AddressLine}</td>
                            <td>{adress.City}</td>
                            <td>{adress.PostalCode}</td>
                            <td>{adress.Country}</td>
                            <td>
                                <Link to={`/admin/update/customer/${adress.AdressID}`}>
                                    <button className="button" role="button">
                                        Update
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button className="buttonDelete" role="button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdressesComponent;
