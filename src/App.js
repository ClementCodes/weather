import Home from './pages/Home';
import {BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"
import WeatherDetail from './pages/WeatherDetail';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route  path="/weathers/:id" component={WeatherDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
