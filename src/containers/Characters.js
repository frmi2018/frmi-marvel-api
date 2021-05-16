// page web characters
import "./card.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LineTop from "../components/LineTop";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = (props) => {
  const {
    skip,
    setSkip,
    count,
    setCount,
    page,
    setPage,
    search,
    setSearch,
    favorites,
    setFavorites,
  } = props;

  // state pour stocker les données reçu
  const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);

  // Pour ajouter des favoris
  // ajouter un item
  // {key: _id, label: (name ou titre), type: (character ou comic)}
  const addFav = (item) => {
    // console.log("*********");
    // console.log("favorites avant modification : ", favorites);
    let array = [...favorites];
    // console.log("objet à ajouter : ", item);
    let addArray = true;
    // array.map((value, key) => {
    array.forEach((value, key) => {
      if (value.id === item.id) {
        array.splice(key, 1);
        setFavorites(array);
        localStorage.removeItem(item.id);
        // console.log(item.id,"supprimer de localstorage.");
        addArray = false;
      }
    });
    if (addArray) {
      array.push(item);
      setFavorites(array);
      localStorage.setItem("favorites", [array]);
      // console.log(item.id,"ajouter dans localstorage.");
    }
  };

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/`
          `https://frmi-marvel-api.herokuapp.com/characters?name=${search}&skip=${skip}`
        );
        // console.log(response.data);
        setData(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skip, setCount, search]);

  // JSX
  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div>
      <LineTop
        skip={skip}
        setSkip={setSkip}
        count={count}
        page={page}
        search={search}
        setSearch={setSearch}
      />
      {/* Afficher les données reçu (JSON) */}
      {data.map((char, index) => {
        return (
          <Link
            key={char._id}
            to={`/comics/${char._id}`}
            skip={skip}
            setSkip={setSkip}
            setCount={setCount}
            page={page}
            id={index}
          >
            <div
              className="card"
              onClick={() => {
                setSkip(0);
                setCount(0);
                setPage("comics");
              }}
            >
              <img
                id={index}
                // src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <div className="infos">
                <div className="label">
                  <div className="bg-heart">
                    {favorites.includes(char._id) ? (
                      <FontAwesomeIcon
                        icon="heart"
                        onClick={() => {
                          var item = {
                            id: char._id,
                            name: char.name,
                            type: "character",
                          };
                          addFav(item);
                        }}
                        style={{ color: "yellow" }}
                        className="heart-img-icon"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="heart"
                        onClick={() => {
                          var item = {
                            id: char._id,
                            name: char.name,
                            type: "character",
                          };
                          addFav(item);
                        }}
                        style={{ color: "grey" }}
                        className="heart-img-icon"
                      />
                    )}
                  </div>
                  <div className="label-col2">
                    <span className="title">{char.name}</span>
                    <span className="index">
                      {skip + index + 1}/{count}
                    </span>
                  </div>
                </div>
                <span className="description">{char.description}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
