import React from 'react';
import './Boost.css';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';

const boost = () => {
    return (
        <div className='boost' style={{backgroundImage: `url(${bgBoostDesktop})`}}>
            <h2>Boost your links today</h2>
            <button>
                Get Started
            </button>
        </div>
    );
};

export default boost;
