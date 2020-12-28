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
              <NavLink to="/mysticshop/BuyCards" exact>
                <li className="nav-item">Prodej Karet</li>
              </NavLink>
              <NavLink to="/mysticshop/SellCards" exact>
                <li className="nav-item">Výkup karet</li>
              </NavLink>
              <NavLink to="/mysticshop/Products" exact>
                <li className="nav-item">Produkty</li>
              </NavLink>
              <NavLink to="/mysticshop/Accessories" exact>
                <li className="nav-item">Doplňky</li>
              </NavLink>
              <NavLink to="/mysticshop/LoyaltyProgram" exact>
                <li className="nav-item">Věrnostní Program</li>
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
