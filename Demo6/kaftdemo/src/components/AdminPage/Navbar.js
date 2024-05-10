import React, { useEffect } from 'react';
import '../../Css/admin.css';

function Header() {
    useEffect(() => {
        // Feather ikonlarını yüklemek için
        const feather = require('feather-icons');
        feather.replace();
    }, []);

    return (
        <div className="header2">
            <div className="header__logo">
                <strong>KAFT</strong>
            </div>
            <nav className="navbar2">
                <ul className="navbar__menu2">
                    <li className="navbar__item2">
                        <a href="#" className="navbar__link2">
                            <i data-feather="home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="navbar__item2">
                        <a href="#" className="navbar__link2">
                            <i data-feather="message-square"></i>
                            <span>Products</span>
                        </a>
                    </li>
                    <li className="navbar__item2">
                        <a href="#" className="navbar__link2">
                            <i data-feather="users"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li className="navbar__item2">
                        <a href="#" className="navbar__link2">
                            <i data-feather="folder"></i>
                            <span>Categories</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
