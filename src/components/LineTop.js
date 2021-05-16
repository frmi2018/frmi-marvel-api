import "./linetop.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import ButtonPrevious from "./ButtonPrevious";
import ButtonNext from "./ButtonNext";
import LineTopInfos from "./LineTopInfos";

const LineTop = ({ skip, setSkip, count, page, setSearch, search }) => {
  return (
    <div className="linetop-container">
      <Search setSkip={setSkip} setSearch={setSearch} />

      <div className="page">
        {/* PREVIOUS PAGE */}
        <div
          className="btn-previous"
          style={
            skip > 0 ? { visibility: "visible" } : { visibility: "collapse" }
          }
        >
          {page === "character" ? (
            <Link
              to="/character"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <ButtonPrevious skip={skip} setSkip={setSkip} />
            </Link>
          ) : (
            <Link
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
              to="/comics"
            >
              <ButtonPrevious skip={skip} setSkip={setSkip} />
            </Link>
          )}
        </div>

        {/* INFOS */}

        <LineTopInfos skip={skip} count={count} />

        {/* NEXT PAGE */}
        <div
          className="btn-next"
          style={
            count - skip >= 100
              ? { visibility: "visible" }
              : { visibility: "collapse" }
          }
        >
          {page === "character" ? (
            <Link
              to="/character"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <ButtonNext skip={skip} setSkip={setSkip} count={count} />
            </Link>
          ) : (
            <Link
              to="/comics"
              skip={skip}
              setSkip={setSkip}
              count={count}
              page={page}
            >
              <ButtonNext skip={skip} setSkip={setSkip} count={count} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default LineTop;
