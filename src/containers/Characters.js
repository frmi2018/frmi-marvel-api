// page web characters
import "./characters.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LineTop from "../components/LineTop";
import Loader from "react-loader-spinner";

const Characters = (props) => {
  const { skip, setSkip, count, setCount, page, setPage } = props;

  // state pour stocker les données reçu
  const [data, setData] = useState();
  // state pour savoir si chargement terminé
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/characters?skip=${skip}`
          `https://frmi-marvel-api.herokuapp.com/characters?skip=${skip}`
        );
        setData(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [skip, setCount]);

  // JSX
  return isLoading ? (
    <Loader
      className="home-loader"
      type="Puff"
      color="#2CB1BA"
      height={80}
      width={80}
    />
  ) : (
    <div>
      <LineTop skip={skip} setSkip={setSkip} count={count} page={page} />
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
          >
            <div
              className="card-hero"
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
