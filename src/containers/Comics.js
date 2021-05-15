// page web comics
import "./comics.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LineTop from "../components/LineTop";
import Loader from "react-loader-spinner";

const Comics = (props) => {
  const { skip, setSkip, count, setCount, page, search, setSearch } = props;

  // state pour stocker les données reçu
  const [data, setData] = useState();
  const [character, setCharacter] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);
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
          console.log(response.data);
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
      {data.map((comic) => {
        return (
          // response.data._id ou comic._id
          <div key={comic._id} className="card-comic">
            <img
              // src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <div>
              <span>{comic.title}</span>
              <span>{comic.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
