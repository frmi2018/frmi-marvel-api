// page web characters

import axios from "axios";
import { useState, useEffect } from "react";

const Characters = () => {
  // state pour stocker les données reçu
  const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data");
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
          <div key={char._id}>
            <img
              src={[char.thumbnail.path] + "." + [char.thumbnail.extension]}
              alt={char.name}
            />
            <span>{char.name}</span>
            <span>{char.description}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
