import "./linetop.css";

const LineTop = (props) => {
  const { skip, setSkip, count } = props;

  const handleClickPrevious = () => {
    setSkip(skip - 100);
  };

  const handleClickNext = () => {
    setSkip(skip + 100);
  };

  return (
    <div className="linetop-container">
      {skip > 0 ? (
        <div
          className="btn-previous"
          onClick={handleClickPrevious}
        >{`1-${skip}`}</div>
      ) : (
        <div className="btn-previous"></div>
      )}

      <div className="col2">
        <div>Moteur de recherche</div>
        {skip + 100 <= count ? (
          <div>{`${skip + 1}-${skip + 100}`}</div>
        ) : (
          <div>{`${skip}-${count}`}</div>
        )}
      </div>

      {count - skip >= 101 ? (
        <div className="btn-next" onClick={handleClickNext}>{`${
          skip + 101
        }-${count}`}</div>
      ) : (
        <div className="btn-next"></div>
      )}
    </div>
  );
};
export default LineTop;
