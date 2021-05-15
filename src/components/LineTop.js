import "./linetop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LineTop = ({ skip, setSkip, count, setSearch, page }) => {
  const handleClickPrevious = () => {
    setSkip(skip - 100);
  };

  const handleClickNext = () => {
    setSkip(skip + 100);
  };

  return (
    <div className="linetop-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche"
          onChange={(event) => setSearch(event.target.value)}
        />
        <FontAwesomeIcon icon="search" className="search-input-icon" />
      </div>

      <div className="page">
        {/* PREVIOUS PAGE */}
        {skip > 0 ? (
          page === "character" ? (
            <Link
              to="/character"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <div className="btn-previous" onClick={handleClickPrevious}>
                <span>&#9664;</span>
                <div>
                  <span>Previous</span>
                  <div>{`1-${skip}`}</div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
              to="/comics"
            >
              <div className="btn-previous" onClick={handleClickPrevious}>
                <span>&#9664;</span>
                <div>
                  <span>Previous</span>
                  <div>{`1-${skip}`}</div>
                </div>
              </div>
            </Link>
          )
        ) : (
          [
            <div className="btn-previous hidden">
              <span>&#9664;</span>
              <div>
                <span>Previous</span>
                <div></div>
              </div>
            </div>,
          ]
        )}
        {/* *************** */}
        <div className="col-middle">
          {skip + 100 <= count
            ? [
                skip === 0 ? (
                  <span>Page 1 / {(count / 100).toFixed(0)}</span>
                ) : (
                  <span>
                    Page {skip / 100 + 1} / {(count / 100).toFixed(0)}
                  </span>
                ),
                <div>{`${skip + 1}-${skip + 100}`}</div>,
              ]
            : [
                <span>
                  Page {skip / 100 + 1} / {(count / 100 + 1).toFixed(0)}
                </span>,
                <div>{`${skip + 1}-${count}`}</div>,
              ]}
        </div>
        {/* NEXT PAGE */}
        {count - skip >= 100 ? (
          page === "character" ? (
            <Link
              to="/character"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <div className="btn-next" onClick={handleClickNext}>
                <div>
                  <span>Next</span>
                  <div>{`${skip + 101}-${count}`}</div>
                </div>
                <span>&#9654;</span>
              </div>
            </Link>
          ) : (
            <Link
              to="/comics"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <div className="btn-next" onClick={handleClickNext}>
                <div>
                  <span>Next</span>
                  <div>{`${skip + 101}-${count}`}</div>
                </div>
                <span>&#9654;</span>
              </div>
            </Link>
          )
        ) : (
          [
            <div className="btn-next hidden">
              <div>
                <span>Next</span>
                <div></div>
              </div>
              <span>&#9654;</span>
            </div>,
          ]
        )}
      </div>
    </div>
  );
};
export default LineTop;
