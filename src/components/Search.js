const Search = (setSkip, setSearch) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Recherche"
      onChange={(event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
      }}
    />
  );
};

export default Search;
