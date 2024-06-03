import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link componentini ekleyin
import productService from '../services/productService';


const Titles = {
    "productId": "Product Id",
    "productName": "Product Name",
    "price": "Price",
    "stock": "Stock",
    "categoryId": "Category Id",
    "update": "Update Product",
    "delete": "Delete Product"
};


const ProductsComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getProducts()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <div style={{ margin: '10%' }}>
            <h1>Admin Panel</h1>
            <h2>Products List</h2>
            <div>
                <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                    Add New Product:
                </h4>
                <button className="button" role="button">
                    Add Product
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
                    {products.map((product) => (
                        <tr key={product.ProductID}>
                            <td>{product.ProductID}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.Price}</td>
                            <td>{product.Stock}</td>
                            <td>{product.CategoryID}</td>
                            <td>
                                <Link to={`/admin/update/customer/${product.ProductID}`}>
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

export default ProductsComponent;
