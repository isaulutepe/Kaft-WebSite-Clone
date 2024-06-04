import React, { useEffect, useState } from 'react';
import userService from '../services/userService';
import { Link } from 'react-router-dom'; // Link componentini ekleyin


const Titles = {
    userid: 'User ID',
    name: 'Name',
    surname: 'Surname',
    eposta: 'Eposta',
    date: 'Date Of Registration',
    update: 'Update User',
    delete: 'Delete User',
};

const UsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUsers()
            .then(response => {
                console.log("Data fetched:", response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users:', error);
            });
    }, []);

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
                    {users.map((user) => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.Name}</td>
                            <td>{user.Surname}</td>
                            <td>{user.Email}</td>
                            <td>{user.DateOfRegistration}</td>
                            <td>
                                <Link to={`/admin/update/customer/${user.ID}`}>
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

export default UsersComponent;
