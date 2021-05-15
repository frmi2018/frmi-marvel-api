import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Nav from "./components/Nav";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState("character");
  const [search, setSearch] = useState("");

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
              />
            </Route>
            {/* <Route path="/comics/:skip">
              <Comics
                skip={skip}
                setSkip={setSkip}
                count={count}
                setCount={setCount}
                page={page}
                setPage={setPage}
              />
            </Route> */}
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
              />
            </Route>
            <Route path="/favoris">
              <Favoris />
            </Route>
            {/* <Route path="/characters/:skip"> */}
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
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
