// Navbar.js
import React, { useState } from 'react';
import '../Css/main.css'; // CSS dosyasını import ettik
import menuwhite from '../images/menuwhite.png'; // menuwhite resmini import ettik
import logoLight from '../images/logo-light.svg'; // logo-light resmini import ettik
import basketwhite from '../images/basketwhite.png'; // basketwhite resmini import ettik
import * as AiIcons from "react-icons/io";
import { SidebarData } from './Products/SidebarData';
import '../Css/Navbar.css';
import MyModal from './HomePage/LanguageSelect';
import { Link } from 'react-router-dom';

import LoginModal from './HomePage/LoginModal';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { user, logout } = useAuth();
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className='header' id="header">
                <div className='menucontainer'>

                    <div className='menuitem'>
                        <div className='menuicon'>
                            <img src={menuwhite} width="24px" height="24px" alt="menu" onClick={showSidebar} />
                        </div>
                        <div className='menutext' style={{ fontFamily: 'Font2' }}>Menu</div>
                    </div>

                    <Link to='/'>
                        <div className='menuitem logo'>
                            <img src={logoLight} alt="logo" /></div>
                    </Link>
                    <div className='menuitem login-basket'>
                        {!user ? (
                            <div className='login' style={{ fontFamily: 'Font2' }}>
                                <a href="#" onClick={() => setShowLoginModal(true)}>Giriş</a>
                                {showLoginModal && (
                                    <LoginModal
                                        show={showLoginModal}
                                        onClose={() => setShowLoginModal(false)}
                                    />
                                )}
                            </div>
                        ) : (
                            <>
                                <div className='welcome' style={{ fontFamily: 'Font2' ,color:'white'}}>
                                    Hoş geldin, {user.customerName}
                                </div>
                                <button onClick={logout} className='logout-button' style={{color:'white'}}>Çıkış Yap</button>
                            </>
                        )}
                        <Link to='/basket'>
                            <div className='basket'>
                                <img src={basketwhite} alt="basket" />
                            </div>
                        </Link>
                    </div>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul id="column-1" className='nav-menu-items' onClick={showSidebar} >
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars' style={{ color: '#353533' }}>
                                    <AiIcons.IoMdClose />
                                </Link>
                            </li>
                            <h1>Ürünler</h1>
                            {SidebarData.slice(0, 11).map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className='nav-menu-items' id="column-2">
                            <h1>Kampanya</h1>
                            {SidebarData.slice(11, 22).map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className='nav-menu-items' id="column-3" style={{ color: "white" }} >
                            <h1 style={{ color: "white" }}>Öne Çıkanlar</h1>
                            {SidebarData.slice(22, 33).map((item, index) => {
                                if (item.title === "Sürdürülebilirlik") {
                                    return (
                                        <li key={index} className={`${item.cName} white-text`}>
                                            <div className="white-text-surdurebilirlik" style={{ color: "white" }}>
                                                <span>{item.title}</span>
                                            </div>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={index} className={`${item.cName} white-text`}>
                                            <Link to={item.path} className="white-text" style={{ color: "white" }}>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>

                        <ul className='nav-menu-items' id="column-4">
                            <h1>Bilgi</h1>
                            {SidebarData.slice(33).map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="mybutton"
                                    onClick={() => setShowModal(!showModal)}
                                >
                                    Türkiye (TL)
                                </button>
                                <button
                                    type="button"
                                    className="mybutton"
                                    onClick={() => setShowModal(!showModal)}
                                >
                                    Türkçe
                                </button>
                                <MyModal showModal={showModal} setShowModal={setShowModal} />
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
