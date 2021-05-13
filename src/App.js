import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/comics/:characterId">
              <Comics />
            </Route>
            <Route path="/favoris">
              <Favoris />
            </Route>
            <Route path="/">
              <Characters />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
