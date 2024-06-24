import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: '',
        image: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', product.title);
            formData.append('price', product.price);
            formData.append('description', product.description);
            formData.append('image', product.image); // Mevcut resmi FormData'ya ekleyin

            const response = await axios.put(`http://localhost:3000/api/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                navigate('/admin');
            }
        } catch (error) {
            console.error('Failed to update product', error);
        }
    };



    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:3000/api/products/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                if (response.data.filePath) {
                    setProduct(prevProduct => ({
                        ...prevProduct,
                        image: response.data.filePath // Mevcut resmi güncelle
                    }));
                } else {
                    console.error('No filePath in response');
                }
            })
            .catch(error => {
                console.error('Failed to upload image', error);
            });
    }, []);


    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Product Name:</label>
                <input type="text" id="title" name="title" value={product.title} onChange={handleChange} />

                <div {...getRootProps({ className: 'dropzone' })} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
                    <input {...getInputProps()} />
                    <p>Drag & drop an image here, or click to select one</p>
                </div>
                {product.image && (
                    <div>
                        <img src={`http://localhost:3000/${product.image}`} alt="Product" style={{ width: '100px', height: '100px' }} />
                    </div>
                )}



                <label htmlFor="price">Product Price:</label>
                <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />

                <label htmlFor="description">Product Description:</label>
                <textarea id="description" name="description" value={product.description} onChange={handleChange}></textarea>

                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct;
