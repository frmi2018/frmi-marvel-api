// page web characters
import "./characters.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  // state pour stocker les données reçu
  const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://frmi-marvel-api.herokuapp.com/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // JSX
  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div>
      {/* Afficher les données reçu (JSON) */}
      {data.map((char) => {
        return (
          // lien vers la page comics avec un paramètre
          <Link id={char._id} to={`/comics/${char._id}`}>
            <div key={char._id} className="card-hero">
              <img
                // src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
              <div>
                <span>{char.name}</span>
                <span>{char.description}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;