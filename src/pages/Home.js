import React, { useEffect } from 'react';
// import WeatherCard from '../components/WeatherCard';
import NavBar from '../components/NavBar';
import Fetch from 'react-fetch';
import { Link ,useHistory } from 'react-router-dom';
import {useQuery} from 'react-query';
import WeatherCard from "../components/WeatherCard";

const Home = () => {

  


            return (
<>
                <WeatherCard  city= "Paris" />
                <WeatherCard  city= "Bordeaux" />
               </>
              
            )
    
                
}
    
export default Home