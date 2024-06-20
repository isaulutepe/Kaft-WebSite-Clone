import { Link, useLocation } from 'react-router-dom';
import '../../Css/Productlar.css';
import Navbar from '../Navbar2';
import Footer from '../Footer';
import { useEffect, useState } from "react";
import FilterComponent from './FilterComponent';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Productlar = () => {
    const [products, setProducts] = useState([]);
    const query = useQuery();

    useEffect(() => {
        const fetchProducts = async () => {
            const filters = {};
            if (query.get('minPrice')) filters.minPrice = query.get('minPrice');
            if (query.get('maxPrice')) filters.maxPrice = query.get('maxPrice');

            const response = await fetch(`/api/products?${new URLSearchParams(filters)}`);
            const json = await response.json();

            if (response.ok) {
                setProducts(json);
            }
        }

        fetchProducts();
    }, [query]);

    return (
        <div>
            <Navbar />
            <div className="content-container">
                <div className="filter-container">
                    <FilterComponent />
                </div>
                <div id="product">
                    {products && products.map((product) => (
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
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Productlar;
