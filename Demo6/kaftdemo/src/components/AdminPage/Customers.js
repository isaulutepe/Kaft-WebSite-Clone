import React, { Component } from 'react';
import { customerData } from './customerData';

const Titles = {
    userid: 'User ID',
    name: 'Name',
    surname: 'Surname',
    eposta: 'Eposta',
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
                        {customerData.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.surname}</td>
                                <td>{customer.eposta}</td>
                                <td>{customer.date}</td>
                                <td>
                                    <button className="button" role="button">
                                        Update
                                    </button>
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
