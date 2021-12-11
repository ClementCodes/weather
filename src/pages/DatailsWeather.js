import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { useHistory, useLocation } from 'react-router';
import NavBar from '../components/NavBar';
import { ButtonSearch } from '../components/ButtonSearch';
import { useEffect } from 'react';


const DetailsWeather = () => {
    
    const [ville, setVille] = useState([]);
    let location = useLocation();
    
    
    useEffect(() => {
     
        let hello = location.pathname
        console.log(hello);
        setVille(hello.replace("/details/", " ")) 
       
},[])

    console.log(ville);
   


    return (

            <>
            <NavBar/>

            <WeatherCard city={ville} />

            </>
    );
};

export default DetailsWeather;