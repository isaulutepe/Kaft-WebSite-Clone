import React, { Component } from 'react'
import { adressData } from './adressData';
import { Link } from 'react-router-dom'; // Link componentini ekleyin


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
};

export default class Body extends Component {
    render() {
        return (
            <div style={{ margin: '10%' }}>
                <h1>Admin Panel</h1>
                <h2>Adress List</h2>
                <div>
                    <h4 style={{ display: "inline-block" }}>Add New Adress :</h4>
                    <button className="button" role="button">Add Adress</button>
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
                        {adressData.map((adress) => (
                            <tr key={adress.id}>
                                <td>{adress.id}</td>
                                <td>{adress.userId}</td>
                                <td>{adress.adressLine}</td>
                                <td>{adress.city}</td>
                                <td>{adress.postalCode}</td>
                                <td>{adress.country}</td>
                                <td>
                                    <Link to={`/admin/update/adress/${adress.id}`}>
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

            </div >
        )
    }
}
