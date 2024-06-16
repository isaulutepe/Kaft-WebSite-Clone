
import { Link } from 'react-router-dom';
import '../../Css/Productlar.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect, useState } from "react"



const Productlar = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products')
            const json = await response.json()

            if (response.ok) {
                setProducts(json)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <Navbar />
            <div id="product">
                { products && products.map((product) => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.image} alt="" />
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
            <Footer />
        </div>
    );
}

export default Productlar;
