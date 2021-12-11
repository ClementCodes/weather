import Home from './pages/Home';
import {BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"
import DetailsWeather from './pages/DatailsWeather';

function App({details}) {



  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path={details} component={DetailsWeather} /> 
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
