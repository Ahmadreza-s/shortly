import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Statistics/>
            <Boost/>
        </>
    );
}

export default App;
