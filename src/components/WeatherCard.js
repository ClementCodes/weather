import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link ,useHistory } from 'react-router-dom';


// clé Api  6eaa11c84bd289979b3714c2fed631b7
const WeatherCard = ( { city ,id}) => {

  
  const history = useHistory()
  const [dataWeather, setDataWeather] = useState([])

  const API_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_KEY
  const API_PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL




  useEffect(() => {
    const fetchData = async () => {
      const result =  axios
        .get(`${API_PUBLIC_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_PUBLIC_KEY}&lang=fr`)
        .then((response) => {
          setDataWeather(response)
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchData()
  }, [])

  const goToDetails = (id) => {
    history.push(`/weathers/${id}`)
    
  }

 

  

  return (
    // <Link to="weathers/:id">
    <div className="card-neumorphism" onClick={()=> goToDetails(dataWeather.id)}>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <button>push bebe</button>
              <h2>{dataWeather.data?.name}</h2>
              <h3>{dataWeather.data?.name}</h3>
              <h3>{dataWeather.data?.weather[0].main}</h3>
              <h3>{dataWeather.data?.main.temp}°C</h3>
              <p>
              {dataWeather.data?.weather[0].description}
              </p>
              <p>{dataWeather.data?.weather[0].icon}</p>
              <img src={dataWeather.data?.weather[0].icon} alt="" />
              < a href="www.google.fr">Read More</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      // </Link>
  );
};

export default WeatherCard;