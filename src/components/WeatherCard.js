import { useEffect, useState } from "react";

import axios from "axios";
const WeatherCard = ({ city }) => {
  
 

  const [dataWeather, setDataWeather] = useState([])

  
  
  useEffect(() => {

    const API_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_KEY
    const API_PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL
    const fetchData = async () => {
       axios
        .get(`${API_PUBLIC_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_PUBLIC_KEY}&lang=fr`)
        .then((response) => {
          setDataWeather(response)
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchData()
  }, [city])



  return (
    <div className="card-neumorphism">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
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
  );
}
export default WeatherCard;
