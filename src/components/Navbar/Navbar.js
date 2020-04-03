import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar-items'>
                <img src={Logo} className='navbar-logo' alt='logo'/>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Resources</a>
            </div>
            <div className='navbar-authentication-buttons'>
                <a href='#' className='navbar-button login'>Login</a>
                <a href='#' className='navbar-button signup'>Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
