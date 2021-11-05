import React from 'react';
import WeatherCard from '../components/WeatherCard';
import NavBar from '../components/NavBar';

const Home = () => {


    console.log("hello");
    return (
        <div className="home">
            <NavBar />
            
            <div>
                <WeatherCard city="London" id="id" />
                </div>
            <WeatherCard city="Paris" id="id" />
            <WeatherCard city="Bordeaux" id="id"/>
            <WeatherCard city="Madrid" id="id"/>
            <WeatherCard city="Austell" id="id"/>
            <WeatherCard city="Montevideo" id="id"/>
        </div>
    );
};

export default Home;