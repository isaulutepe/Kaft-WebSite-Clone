import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link componentini ekleyin
import categoryService from '../services/categoryService';


const Titles =
{
    "categoryId": "Category Id",
    "categoryName": "Category Name",
    "update": "Update Category",
    "delete": "Delete Category"
};

const CategoriesComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoryService.getCategories()
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <div style={{ margin: '10%' }}>
            <h1>Admin Panel</h1>
            <h2>Category List</h2>
            <div>
                <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                    Add New Category:
                </h4>
                <button className="button" role="button">
                    Add Category
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
                    {categories.map((category) => (
                        <tr key={category.CategoryID}>
                            <td>{category.CategoryID}</td>
                            <td>{category.CategoryName}</td>
                            <td>
                                <Link to={`/admin/update/customer/${category.CategoryID}`}>
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

export default CategoriesComponent;
