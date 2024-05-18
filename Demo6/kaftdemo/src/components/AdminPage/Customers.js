import React, { Component } from 'react';
import { usersData } from './customerData';
import { Link } from 'react-router-dom'; // Link componentini ekleyin

const Titles = {
    userid: 'User ID',
    name: 'Name',
    surname: 'Surname',
    eposta: 'Eposta',
    adressId:"Adress Id",
    date: 'Date Of Registration',
    update: 'Update User',
    delete: 'Delete User',
};

class Customer extends Component {
    render() {
        return (
            <div style={{ margin: '10%' }}>
                <h1>Admin Panel</h1>
                <h2>Customers List</h2>
                <div>
                    <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                        Add New Customer:
                    </h4>
                    <button className="button" role="button">
                        Add Customer
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
                        {usersData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.eposta}</td>
                                <td>{user.adressId}</td>
                                <td>{user.date}</td>
                                <td>
                                    <Link to={`/admin/update/customer/${user.id}`}>

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
    }
}

export default Customer;
