import "./nav.css";
import logo from "../assets/images/logo-marvel.png";
import { Link } from "react-router-dom";

const Nav = ({ setSkip, setPage, setCount, setSearch }) => {
  return (
    <nav className="nav-container">
      <img src={logo} alt="logo-marvel" />
      <div>
        <div className="nav-menu">
          <ul>
            <li
              onClick={() => {
                setSkip(0);
                setCount(0);
                setSearch("");
                setPage("character");
              }}
            >
              <Link to="/">Personnages</Link>
            </li>
            <li
              onClick={() => {
                setSkip(0);
                setCount(0);
                setSearch("");
                setPage("comics");
              }}
            >
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/favoris">Favoris</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
