const ButtonNext = ({
  skip = { skip } || 0,
  setSkip = { setSkip },
  count = { count },
}) => {
  const handleClickNext = () => {
    setSkip(skip + 100);
  };
  return (
    <div className="btn-next" onClick={handleClickNext}>
      <div>
        <span>Next</span>
        <div>{`${skip + 101}-${count}`}</div>
      </div>
      <span>&#9654;</span>
    </div>
  );
};

export default ButtonNext;
