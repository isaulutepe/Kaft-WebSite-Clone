import React, { Component } from 'react';
import '../Css/main.css'; // CSS dosyasını import ettik
import menuwhite from '../images/menuwhite.png'; // menuwhite resmini import ettik
import logoLight from '../images/logo-light.svg'; // logo-light resmini import ettik
import basketwhite from '../images/basketwhite.png'; // basketwhite resmini import ettik

class Navbar extends Component {
    render() {
        return (
            // Navbar Kısmı 
            <div>
                <div className='header' id="header">
                    <div className='menucontainer'>
                        <a href='#'>
                            <div className='menuitem'>
                                <div className='menuicon'>
                                    <img src={menuwhite} width="24px" height="24px" alt="menu" />
                                </div>
                                <div className='menutext' style={{ fontFamily: 'Font2' }}>Menu</div>
                            </div>
                        </a>
                        <div className='menuitem logo'><a href='index.html'>
                            <img src={logoLight} alt="logo" /></a></div>
                        <div className='menuitem login-basket'>
                            <div className='login' style={{ fontFamily: 'Font2' }}><a href="#">Giriş</a></div>
                            <div className='basket'><a href='#'>
                                <img src={basketwhite} alt="basket" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
