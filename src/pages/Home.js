import WeatherCard from "../components/WeatherCard";





const Home = () => {
  

 const   villes = ["Bordeaux","Paris"]

const  paris = <WeatherCard  city="paris" />
  
    return (
      <>
           
            
            {/* <WeatherCard  city="Paris" />
            <WeatherCard  city="Bordeaux" /> */}
            {villes.map((ville) => {
                return (    
                    <WeatherCard  city={ville} />
                  
                    
                )
            })}
            <div>{paris}</div>
        </>

               
               
         
       
    )
};
    
export default Home;