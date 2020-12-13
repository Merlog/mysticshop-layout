import "./HeaderTabs.css";
import { NavLink } from "react-router-dom";

export default function HeaderTabs() {
  return (
    <div className="w-100 headerTabs">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <ul className="nav nav-tabs">
              <NavLink to="/mysticshop/#" exact>
                <li className="nav-item">Domů</li>
              </NavLink>
              <NavLink to="/mysticshop/BonusProgram" exact>
                <li className="nav-item">Bonusový program</li>
              </NavLink>
              <NavLink to="/mysticshop/CardGames" exact>
                <li className="nav-item">Karetní hry</li>
              </NavLink>
              <NavLink to="/mysticshop/LoyaltyDiscount" exact>
                <li className="nav-item">Věrnostní sleva</li>
              </NavLink>
              <NavLink to="/mysticshop/HowTo" exact>
                <li className="nav-item">Jak nakupovat</li>
              </NavLink>
              <a href="http://www.mysticshop.cz/blog/" target="blank" exact>
                <li className="nav-item">Blog Mudrc</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
