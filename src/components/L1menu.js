import { NavLink } from "react-router-dom";
import "./leftMenu.css";

export default function L1menu() {
  return (
    <nav className="nav flex-column L1menu">
      <div className="nav-link headline">Magic: TG Kusovky</div>
      <NavLink className="nav-link" to="/#">
        Prodej karet
      </NavLink>
      <NavLink className="nav-link" to="/#">
        Výkup karet
      </NavLink>
    </nav>
  );
}
