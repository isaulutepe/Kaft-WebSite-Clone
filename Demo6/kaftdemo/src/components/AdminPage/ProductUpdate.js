import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from './productsData';
import '../../Css/updateForms.css';

function UpdatePage() {
    let { id } = useParams();

    // id'ye göre kategoriyi bul
    const product = productData.find(product => product.id === parseInt(id));

    return (
        <div className='formBody'>
            <h2>Update Product With Id: {id}</h2>
            <br></br>
            {/* <p>Updating category with ID: {id}</p> */}
            {/* Kategoriyi güncelleme işlemleri */}
            {product ? (
                <form>
                    <label>
                        Product Id:
                        <input type='text' defaultValue={product.id} />
                    </label>
                    <label>
                        Product Name:
                        <input type="text" defaultValue={product.productName} />
                    </label>
                    <label>
                        Price:
                        <input type="text" defaultValue={product.price} />
                    </label>
                    <label>
                        Stock:
                        <input type="text" defaultValue={product.stock} />
                    </label>
                    <label>
                        Category Id:
                        <input type="text" defaultValue={product.categoryId} />
                    </label>
                    <button type="submit">Update</button>
                </form>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}

export default UpdatePage;
