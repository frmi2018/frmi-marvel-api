// page web favoris

const Favoris = (props) => {
  const { favorites } = props;

  return (
    <div>
      <h2>Vos Favoris</h2>
      {favorites.map((item, key) => {
        return (
          <div key={key}>
            <th>{item.type}</th>
            <th>{item.name}</th>
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;
