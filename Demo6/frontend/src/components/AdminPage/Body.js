import React, { useState, useEffect } from 'react';
import HomePage from './Home';

import '../../Css/admin.css';
import UsersComponent from '../UsersComponent';
import ProductsComponent from '../ProductsComponent';
import CategoriesComponent from '../CategoriesComponent';
import AdressesComponent from '../AdressesComponent';


function Header() {
    const [content, setContent] = useState('');

    useEffect(() => {
        // Feather ikonlarını yüklemek için
        const feather = require('feather-icons');
        feather.replace();
        // Sayfa ilk açıldığında Home state'i çalışsın
        Home();
    }, []);

    const Home = () => {
        setContent(<HomePage />);
    }

    const showProduct = () => {
        setContent(<ProductsComponent />);
    };

    const showCustomer = () => {
        setContent(<UsersComponent />);
    };
    const showCategoriy = () => {
        setContent(<CategoriesComponent />);
    };
    const showAdress = () => {
        setContent(<AdressesComponent />);
    };
    return (
        <div className='container'>
            <div className="header2">
                <nav className="navbar2">
                    <ul className="navbar__menu2">
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={Home}>
                                <i data-feather="home"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showProduct}>
                                <i data-feather="message-square"></i>
                                <span>Products</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showCustomer}>
                                <i data-feather="users"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showCategoriy}>
                                <i data-feather="folder"></i>
                                <span>Categories</span>
                            </a>
                        </li>
                        <li className="navbar__item2">
                            <a href="#" className="navbar__link2" onClick={showAdress}>
                                <i data-feather="compass"></i>
                                <span>Adress</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default Header;
