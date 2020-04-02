import React from 'react';
import './Hero.css';
import imageWorking from '../../assets/images/illustration-working.svg';

const hero = () => {
    return (
        <div className='hero'>
            <div className='hero-texts'>
                <h1 className='hero-texts-title'>More than just shorter links</h1>
                <h2 className='hero-texts-subtitle'>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </h2>
                <a href='#' className='hero-texts-button'>
                    Get Started
                </a>
            </div>
            <div>
                <img className='image-working' src={imageWorking} alt='Illustration Working'/>
            </div>
        </div>
    );
};

export default hero;
