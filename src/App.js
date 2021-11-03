import Home from './pages/Home';
import {  Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"
function App() {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/projetflag" component={ProjetFlag} />
    <Route exact path="/Formulaire" component={Formulaire} />
    <Route exact path="/test" component={PageTest} /> */}

    <Route component={NotFound} />
  </Switch>
  );
}

export default App;
