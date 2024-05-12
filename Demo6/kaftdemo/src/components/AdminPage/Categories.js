import React, { Component } from 'react'
import { categorydata } from './categoryData';

const Titles =
{
    "categoryId": "Category Id",
    "categoryName": "Category Name",
    "update": "Update Category",
    "delete": "Delete Category"
};

export default class Body extends Component {
    render() {
        return (
            <div style={{ margin: '10%' }}>
                <h1>Admin Panel</h1>
                <h2>Category List</h2>
                <div>
                    <h4 style={{ display: "inline-block" }}>Add New Category :</h4>
                    <button className="button" role="button">Add Category</button>
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
                        {categorydata.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.categoryName}</td>
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

            </div >
        )
    }
}
