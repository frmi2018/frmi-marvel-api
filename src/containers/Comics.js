// page web comics
import "./comics.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comics = () => {
  // state pour stocker les données reçu
  const [data, setData] = useState();
  const [character, setCharacter] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);
  // récupération des paramètres envoyés à la fonction Comics
  const { characterId } = useParams();

  // requête serveur pour récupérer les données des comics liés à ce personnage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:3000/comics?characterId=${characterId}`
          `https://frmi-marvel-api.herokuapp.com/comics?characterId=${characterId}`
        );
        console.log(response.data);
        setCharacter(response.data.name);
        // Mettre le tableau des comics dans le state data pour le .map
        setData(response.data.comics);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  // JSX
  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div>
      <span>{character}</span>
      <span> appear in {data.length} comics</span>
      {/* Faire un .map sur le tableau des comics pour les afficher */}
      {data.map((comic) => {
        return (
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
