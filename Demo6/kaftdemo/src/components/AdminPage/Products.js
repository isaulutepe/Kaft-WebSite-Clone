import React, { Component } from 'react'
import { productData } from './productsData';


const Titles = {
  "productId": "Product Id",
  "productName": "Product Name",
  "price": "Price",
  "stock": "Stock",
  "categoryId": "Category Id",
  "update": "Update Product",
  "delete": "Delete Product"
};

export default class Products extends Component {


  render() {
    return (
      <div style={{ margin: '10%' }}>
        <h1>Admin Panel</h1>
        <h2>Products List</h2>
        <div>
          <h4 style={{ display: "inline-block" }}>Add New Product :</h4>
          <button className="button" role="button">Add Product</button>
        </div>

        <table>
          {/* Ürünler daha sonra veritabanından çekilecek*/}
          <thead>
            <tr>
              {Object.values(Titles).map((title) => (
                <th key={title}>
                  <h3>{title}</h3>
                </th>
              ))}
            </tr>
          </thead>
          {/* ÜRÜNLER VERİTABANINDAN GELECEK */}
          <tbody>
            {productData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.categoryId}</td>
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
    )
  }
}
