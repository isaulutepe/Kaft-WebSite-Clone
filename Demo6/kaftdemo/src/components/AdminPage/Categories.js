import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div style={{ margin: '8%' }}>
                <h1>Admin Paneli</h1>
                <h2>Ürün Listesi</h2>
                <div>
                    <h4 style={{ display: "inline-block", marginRight: "10px" }}>Yeni Ürün Ekle :</h4>
                    <button className="button" role="button">Ürün Ekle</button>
                </div>

                <table>
                    {/* Ürünler daha sonra veritabanından çekilecek*/}
                    <tr>
                        <th><h3>Product Id</h3></th>
                        <th><h3>Product Name</h3></th>
                        <th><h3>Price</h3></th>
                        <th><h3>Stock</h3></th>
                        <th><h3>Category Id</h3></th>
                        <th><h3>Ürünü Güncelle</h3></th>
                        <th><h3>Ürünü Sil</h3></th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Desenli Tişört</td>
                        <td>700</td>
                        <td>200</td>
                        <td>1</td>
                        <td><button className="button" role="button">Güncelle</button></td>
                        <td><button className="buttonDelete" role="button">Sil</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Desenli Pantolon</td>
                        <td>1000</td>
                        <td>400</td>
                        <td>2</td>
                        <td><button className="button" role="button">Güncelle</button></td>
                        <td><button className="buttonDelete" role="button">Sil</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Şort</td>
                        <td>500</td>
                        <td>100</td>
                        <td>3</td>
                        <td><button className="button" role="button">Güncelle</button></td>
                        <td><button className="buttonDelete" role="button">Sil</button></td>
                    </tr>
                </table>

            </div>
        )
    }
}
