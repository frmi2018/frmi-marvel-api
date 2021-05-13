// page web characters
import "./characters.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LineTop from "../components/LineTop";

const Characters = () => {
  // state pour stocker les données reçu
  const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);
  // state pour navigation dans les pages
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(0);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:3000/characters?skip=${skip}`
          `https://frmi-marvel-api.herokuapp.com/characters?skip=${skip}`
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
  }, [skip]);

  // JSX
  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div>
      <LineTop skip={skip} setSkip={setSkip} count={count} />
      {/* Afficher les données reçu (JSON) */}
      {data.map((char, index) => {
        return (
          <Link id={char._id} to={`/comics/${char._id}`}>
            <div key={char._id} className="card-hero">
              <img
                // src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <div className="infos">
                <div className="label">
                  <span>{char.name}</span>
                  <span>
                    {skip + index + 1}/{count}
                  </span>
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
