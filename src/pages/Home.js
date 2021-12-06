import React, { useEffect, useState } from 'react';
// import WeatherCard from '../components/WeatherCard';
import NavBar from '../components/NavBar';
import Fetch from 'react-fetch';
import { Link ,useHistory } from 'react-router-dom';
import {useQuery} from 'react-query';
import WeatherCard from "../components/WeatherCard";

const Home = () => {

    // const [ville, setVille] = useState()
    
    let villes = ["london","Paris", "Bordeaux", "Lyon"]
   

    return (
        <>
            {villes.map((ville, index) => {
                return (    
                    <WeatherCard key={index} city={ville} />
                    // <p>{ville}</p>
                    
                )
            })}
        </>
    )
};
    
export default Home