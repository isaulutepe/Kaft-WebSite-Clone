import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div style={{ margin: '5%' }}>
        <h1>Admin Panel</h1>
        <h2>Products List</h2>
        <div>
          <h4 style={{ display: "inline-block" }}>Add New Product :</h4>
          <button className="button" role="button">Add Product</button>
        </div>

        <table>
          {/* Ürünler daha sonra veritabanından çekilecek*/}
          <tr>
            <th><h3>Product Id</h3></th>
            <th><h3>Product Name</h3></th>
            <th><h3>Price</h3></th>
            <th><h3>Stock</h3></th>
            <th><h3>Category Id</h3></th>
            <th><h3>Update Product</h3></th>
            <th><h3>Delete Product</h3></th>

          </tr>
          {/* ÜRÜNLER VERİTABANINDAN GELECEK */}
          <tr>
            <td>1</td>
            <td>Desenli Tişört</td>
            <td>700</td>
            <td>200</td>
            <td>1</td>
            <td><button className="button" role="button">Update</button></td>
            <td><button className="buttonDelete" role="button">Delete</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Desenli Pantolon</td>
            <td>1000</td>
            <td>400</td>
            <td>2</td>
            <td><button className="button" role="button">Update</button></td>
            <td><button className="buttonDelete" role="button">Delete</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Şort</td>
            <td>500</td>
            <td>100</td>
            <td>3</td>
            <td><button className="button" role="button">Update</button></td>
            <td><button className="buttonDelete" role="button">Delete</button></td>
          </tr>
        </table>

      </div>
    )
  }
}
