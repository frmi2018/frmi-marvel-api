// page web comics
import "./card.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LineTop from "../components/LineTop";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = (props) => {
  const {
    skip,
    setSkip,
    count,
    setCount,
    page,
    search,
    setSearch,
    favorites,
    setFavorites,
  } = props;

  // state pour stocker les données reçu
  const [data, setData] = useState();
  const [character, setCharacter] = useState();
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

  // récupération des paramètres envoyés à la fonction Comics
  const { characterId } = useParams();

  // requêtes serveur route comics
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (characterId) {
          // route pour les comics d'un character
          const response = await axios.get(
            // `http://localhost:4000/comics?characterId=${characterId}`
            `https://frmi-marvel-api.herokuapp.com/comics?characterId=${characterId}`
          );
          setCharacter(response.data.name);
          setData(response.data.comics);
          setCount(response.data.comics.length);
          setIsLoading(false);
        } else {
          // route pour tous les comics
          const response = await axios.get(
            // `http://localhost:4000/`
            `https://frmi-marvel-api.herokuapp.com/comics?title=${search}&skip=${skip}`
          );
          // console.log(response.data);
          setData(response.data.results);
          setCount(response.data.count);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId, skip, setCount, search]);

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
      {characterId ? (
        [
          <span className="info">{character}</span>,
          <span className="info">
            est présent dans {data.length} comic
            {data.length > 1 && <span>s</span>}
          </span>,
        ]
      ) : (
        <span>Comics List</span>
      )}
      {/* Faire un .map sur le tableau des comics pour les afficher */}
      {data.map((comic, index) => {
        return (
          // response.data._id ou comic._id
          <div key={comic._id} className="card">
            <img
              id={index}
              // src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <div className="infos">
              <div className="label">
                <div className="bg-heart">
                  {favorites.includes(comic._id) ? (
                    <FontAwesomeIcon
                      icon="heart"
                      onClick={() => {
                        var item = {
                          id: comic._id,
                          name: comic.title,
                          type: "comics",
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
                          id: comic._id,
                          name: comic.title,
                          type: "comics",
                        };
                        addFav(item);
                      }}
                      style={{ color: "grey" }}
                      className="heart-img-icon"
                    />
                  )}
                </div>
                <div className="label-col2">
                  <span className="title">{comic.title}</span>
                  <span className="index">
                    {skip + index + 1}/{count}
                  </span>
                </div>
              </div>
              <span className="description">{comic.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
