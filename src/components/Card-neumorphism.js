import React, { useEffect, useState } from 'react';
import axios from "axios";


// clé Api  6eaa11c84bd289979b3714c2fed631b7
const Neumorphism = (props) => {

  //   let imgWeather = function(param1){
  //     if (param1) {

  //    }
  // };
  const API_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_KEY
  const API_PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL

  const { city } = props



  const [dataWeather, setDataWeather] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result =
        axios
          .get(`${API_PUBLIC_URL}/data/2.5/weather?q=${city}&appid=${API_PUBLIC_KEY}`)
          .then((response) => {
            setDataWeather(response)
          })
          .catch((err) => {
            console.log(err);
          })
    }
    fetchData()
  }, [])
  //  console.log(dataWeather.data.main.temp);


  return (
    <div className="card-neumorphism">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <button>e</button>
              <h2>{dataWeather.data?.name}</h2>
              <h3>{dataWeather.data?.name}</h3>
              <h3>{dataWeather.data?.weather[0].main}</h3>
              <h3>{dataWeather.data?.main.temp}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores pariatur corporis
                assumenda rem laborum ad accusantium hic.
              </p>
              < a href="www.google.fr">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;