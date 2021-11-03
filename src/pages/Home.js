import React from 'react';
import Neumorphism from '../components/Card-neumorphism';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <Neumorphism city="London"/>
            <Neumorphism city="Paris" />
            <Neumorphism city="Bordeaux"/>
            <Neumorphism city="Madrid"/>
            <Neumorphism city="Austell"/>
            <Neumorphism city="Montevideo"/>
        </div>
    );
};

export default Home;