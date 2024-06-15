import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from './Context'
import '../../Css/Productlar.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
export class Productlar extends Component {

    static contextType = DataContext;

    render() {
        const { products, addCart } = this.context;
        return (
            <>
            <Navbar></Navbar>
                <div id="product">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <p>{product.description}</p>
                                    <span>{product.price} TL</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Footer></Footer>
            </>
        )
    }
}

export default Productlar
