import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div style={{ margin: '5%' }}>
                <h1>Admin Panel</h1>
                <h2>Category List</h2>
                <div>
                    <h4 style={{ display: "inline-block"}}>Add New Category :</h4>
                    <button className="button" role="button">Add Category</button>
                </div>

                <table>
                    {/* Kateforiler daha sonra veritabanından çekilecek*/}
                    <tr>
                        <th><h3>Categoriy Id</h3></th>
                        <th><h3>Categoriy Name</h3></th>
                        <th><h3>Update Category</h3></th>
                        <th><h3>Delete Category</h3></th>

                    
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Tişört</td>
                       
                        <td><button className="button" role="button" >Update</button></td>
                        <td><button className="buttonDelete" role="button">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pantolon</td>
                        <td><button className="button" role="button">Update</button></td>
                        <td><button className="buttonDelete" role="button">Delete</button></td>
                    </tr>
             
                </table>

            </div>
        )
    }
}
