import React from 'react';
import './Navbar.css';

const navbar = () => {
    return (
        <navbar>
            <div className='navbar-items'>
                <h3 className='navbar-title'>Shortly</h3>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Resources</a>
            </div>
            <div className='navbar-authentication-buttons'>
                <a href='#' className='navbar-button login'>Login</a>
                <a href='#' className='navbar-button signup'>Sign Up</a>
            </div>
        </navbar>
    );
};

export default navbar;
