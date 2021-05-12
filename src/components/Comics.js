// page web comics
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comics = () => {
  // state pour stocker les données reçu
  // const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(false);
  // récupération des paramètres envoyés à la fonction Comics
  const { id } = useParams();

  // requête serveur pour récupérer les données des comics liés à ce personnage
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://frmi-marvel-api.herokuapp.com/comics/${id}"
  //       );
  //       // console.log(response.data);
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  // JSX
  return isLoading ? (
    <span>Chargement en cours...</span>
  ) : (
    <div>
      <span>Comics page</span>
      <br />
      <span>id character : {id}</span>
    </div>
  );
};

export default Comics;
