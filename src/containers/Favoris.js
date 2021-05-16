// page web favoris

const Favoris = (props) => {
  const { favorites } = props;

  return (
    <div>
      <h2>Vos personnages favoris</h2>
      {favorites.map((item, key) => {
        return (
          item.type === "character" && [
            <span key={key}>{item.name}</span>,
            <br />,
          ]
        );
      })}
      <h2>Vos comics favoris</h2>
      {favorites.map((item, key) => {
        return (
          item.type === "comics" && [<span key={key}>{item.name}</span>, <br />]
        );
      })}
    </div>
  );
};

export default Favoris;
