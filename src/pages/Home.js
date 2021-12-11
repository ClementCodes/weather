import WeatherCard from "../components/WeatherCard";
import NavBar from "../components/NavBar";

const Home = () => {
    const cities = ['Paris', 'Bordeaux',"London"]
    return (

        <>
                <NavBar/>
            {cities.map((ville, index) => (
                <div key={index}>
                    <WeatherCard city={ville} />
                   
                </div>
            ))}
        </>
    )
};
    
export default Home;