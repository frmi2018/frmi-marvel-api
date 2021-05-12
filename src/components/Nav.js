import "./nav.css";
import logo from "../assets/images/logo-marvel.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={logo} alt="logo-marvel" />
      <div>
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/">Personnages</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="favoris">Favoris</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
