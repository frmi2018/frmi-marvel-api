import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Favoris from "./components/Favoris";
import logo from "./assets/images/logo-marvel.png";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <img src={logo} alt="logo-marvel" style={{ height: 50 }} />
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Personnages</Link>
              </li>
              <li>
                <Link to="/comics">Comics</Link>
              </li>
              <li>
                <Link to="favoris">Favoris</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/comics">
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
