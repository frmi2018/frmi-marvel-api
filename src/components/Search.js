import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  const { setSkip, setSearch } = props;
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Recherche"
        onChange={(event) => {
          setSkip(0);
          setSearch(event.target.value);
        }}
      />
      <FontAwesomeIcon icon="search" className="search-input-icon" />
    </div>
  );
};

export default Search;
