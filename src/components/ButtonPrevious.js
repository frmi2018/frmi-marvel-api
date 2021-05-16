const ButtonPrevious = ({ skip, setSkip }) => {
  const handleClickPrevious = () => {
    setSkip(skip - 100);
  };

  return (
    <div className="btn-previous" onClick={handleClickPrevious}>
      <span>&#9664;</span>
      <div>
        <span>Previous</span>
        <div>{`1-${skip}`}</div>
      </div>
    </div>
  );
};
export default ButtonPrevious;
