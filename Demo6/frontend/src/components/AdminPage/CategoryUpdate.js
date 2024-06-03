import React from 'react';
import { useParams } from 'react-router-dom';
import { categorydata } from './categoryData';
import '../../Css/updateForms.css';

function UpdatePage() {
    let { id } = useParams();

    // id'ye göre kategoriyi bul
    const category = categorydata.find(category => category.id === parseInt(id));

    return (
        <div className='formBody'>
            <h2>Update Category With Id: {id}</h2>
            <br></br>
            {/* <p>Updating category with ID: {id}</p> */}
            {/* Kategoriyi güncelleme işlemleri */}
            {category ? (
                <form>
                    <label>
                        Category Id:
                        <input type='text' defaultValue={category.id} />
                    </label>
                    <label>
                        Category Name:
                        <input type="text" defaultValue={category.categoryName} />
                    </label>
                    <button className='updatebtn' type="submit">Update</button>
                </form>
            ) : (
                <p>Category not found.</p>
            )}
        </div>
    );
}

export default UpdatePage;
