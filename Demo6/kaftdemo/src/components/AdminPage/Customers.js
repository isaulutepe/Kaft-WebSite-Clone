import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <div style={{ margin: '5%' }}>
                <h1>Admin Panel</h1>
                <h2>Customers List</h2>
                <div>
                    <h4 style={{ display: "inline-block", marginRight: "10px" }}>Add New Customer:</h4>
                    <button className="button" role="button">Add Customer</button>
                </div>

                <table>
                    {/* Kullanıcılar daha sonra veritabanından çekilecek*/}
                    <tr>
                        <th><h3>User Id</h3></th>
                        <th><h3>Name</h3></th>
                        <th><h3>Surname</h3></th>
                        <th><h3>Eposta</h3></th>
                        <th><h3>Date Of Registration</h3></th>
                        <th><h3>Update User</h3></th>
                        <th><h3>Delete User</h3></th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>İsa</td>
                        <td>Ulutepe</td>
                        <td>ulutepe42@gmail.com</td>
                        <td>11.05.2024</td>
                        <td><button className="button" role="button">Update</button></td>
                        <td><button className="buttonDelete" role="button">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sena</td>
                        <td>Yıldız</td>
                        <td>senasenayildiz@gmail.com</td>
                        <td>11.05.2024</td>
                        <td><button className="button" role="button">Update</button></td>
                        <td><button className="buttonDelete" role="button">Delete</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>İrem</td>
                        <td>Maydan</td>
                        <td>iremmydn@gmail.com</td>
                        <td>11.05.2024</td>
                        <td><button className="button" role="button">Update</button></td>
                        <td><button className="buttonDelete" role="button">Delete</button></td>
                    </tr>
                </table>

            </div>
        )
    }
}
