// TODO
// revoir description il y a des balises HTML
// revoir couleur coeur favoris si actif ou pas
// ajouter favoris comics
// revoir css page favoris
// revoir warning/erreur

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Nav from "./components/Nav";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHeart);

function App() {
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState("character");
  const [search, setSearch] = useState("");

  // tableau pour stocker les favoris
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites") || []
  );

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Nav
            setSkip={setSkip}
            setPage={setPage}
            setCount={setCount}
            setSearch={setSearch}
          />
          <Switch>
            <Route path="/comics/:characterId">
              <Comics
                skip={skip}
                setSkip={setSkip}
                count={count}
                setCount={setCount}
                page={page}
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Route>
            <Route path="/comics">
              <Comics
                skip={skip}
                setSkip={setSkip}
                count={count}
                setCount={setCount}
                page={page}
                setPage={setPage}
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Route>
            <Route path="/favoris">
              <Favoris favorites={favorites} />
            </Route>
            <Route path="/characters">
              <Characters
                skip={skip}
                setSkip={setSkip}
                count={count}
                setCount={setCount}
                page={page}
                setPage={setPage}
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Route>
            <Route path="/">
              <Characters
                skip={skip}
                setSkip={setSkip}
                count={count}
                setCount={setCount}
                page={page}
                setPage={setPage}
                search={search}
                setSearch={setSearch}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
