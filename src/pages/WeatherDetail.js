import React, {  useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';


const WeatherPage = ({match}) => {
 
        const [data, setData] = useState(null)
        
        useEffect(() => {
            WeatherCard.forEach(data => {
                if (match.params.id === data.id.toSring()) {
                    setData(data)
                }
            })
        }, [match.params.id]);
    

 return (
     <div className="one">
         {data ? (
            
             
       
 
         <div className="content">
              <WeatherCard id="id" />
                            <button>push bebe</button>
                            {/* <h2>{dataWeather.data?.name}</h2>
              <h3>{dataWeather.data?.name}</h3>
              <h3>{dataWeather.data?.weather[0].main}</h3>
              <h3>{dataWeather.data?.main.temp}°C</h3>
              <p>
              {dataWeather.data?.weather[0].description}
              </p>
              <p>{dataWeather.data?.weather[0].icon}</p>
              <img src={dataWeather.data?.weather[0].icon} alt="" /> */}
                                 < a href="www.google.fr">Read More</a>
                                 
                                 <Link to="/">Retour acceuil</Link>
                        </div>
            
          
             
         ) : (
             <h4>Aucune meteo à afficher</h4>
         )}
    </div>
);
}

    export default WeatherPage;