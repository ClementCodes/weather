import { useQuery } from "react-query";

const WeatherCard = ({city}) => {
 
     const fetchUsers = async () => {
 
         const API_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_KEY
         const API_PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL
   
         const res = await fetch(`${API_PUBLIC_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_PUBLIC_KEY}&lang=fr`)
 
 
 
         return res.json()
     }
     
     const { isLoading, data ,isError} = useQuery("user" ,fetchUsers)
 
     console.log(data);
     
   
     if (isLoading) {
       
       return  <div>Chargement...</div>
     }
   
     if (isError) {
       
       return <div>Error </div>
     }
 
 

    return (
      <div  className="card-neumorphism">
      <div className="container">
          <div className="card">
              <div className="box">
                  <div className="content">


                      <h3>{data.name}</h3>
                     <h3>{data.name}</h3>
                      <h3>{data.weather[0].main}</h3>
                      <h3>{data.main.temp}°C</h3>
                      <p>
                          {data.weather[0].description}
                      </p>
                      <p>{data.weather[0].icon}</p>
                      <img src={data.weather[0].icon} alt="" /> 
                      < a href="www.google.fr">Read More</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }


export default WeatherCard;