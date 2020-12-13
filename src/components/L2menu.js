import "./leftMenu.css";
import { NavLink } from "react-router-dom";

export default function L2menu() {
  return (
    <nav className="nav flex-column L1menu">
      <div className="nav-link headline">Katalog zboží</div>
      <NavLink className="nav-link" to="/#">
        Alba
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Bazar
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Boxy na karty
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Herní podložky
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Knížky
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Kostky
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Krabičky
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Magic: The Gathering
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Obaly na karty
      </NavLink>
      {/* <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Kostky
        </a>
        <div className="dropdown-menu">
          <NavLink className="nav-link" to="/#">
            Příklad 1
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 2
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 3
          </NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Krabičky
        </a>
        <div className="dropdown-menu">
          <NavLink className="nav-link" to="/#">
            Příklad 1
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 2
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 3
          </NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Magic: The Gathering
        </a>
        <div className="dropdown-menu">
          <NavLink className="nav-link" to="/#">
            Příklad 1
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 2
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 3
          </NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Obaly na karty
        </a>
        <div className="dropdown-menu">
          <NavLink className="nav-link" to="/#">
            Příklad 1
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 2
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Příklad 3
          </NavLink>
        </div>
      </li> */}
      <NavLink className="nav-link" to="/#">
        Ostatní doplňky
      </NavLink>
    </nav>
  );
}
