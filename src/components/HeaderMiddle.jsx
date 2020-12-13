import "./HeaderMiddle.css";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo1.png";
import cart from "./../assets/svg/cart-material.svg";
import Search from "./../assets/svg/search-material.svg";

export default function HeaderMiddle() {
  return (
    <div className="row navMidle mb-3">
      <div className="col-3">
        <a className="navbar-brand mainLogo" href="/#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="col-6">
        <form className="form-inline my-2 searchWrapper">
          <input
            className="form-control w-100 search"
            type="search"
            placeholder="Vyhledat"
          ></input>
          <button className="btn searchButton" type="submit">
            <img src={Search} alt="search"></img>
          </button>
        </form>
      </div>
      <div className="col-3 d-flex flex-row justify-content-between bonusCartWraper">
        <div className="bonus">
          <NavLink to="/mysticshop/MyAccount" exact>
            <span>Bonus: </span>
            <span className="cartAmount">20 b.</span>
          </NavLink>
        </div>
        <div className="cart">
          <NavLink to="/mysticshop/Cart1" exact>
            <img src={cart} alt="logo" />
            <span className="cartItems">1 ks</span>
            <span className="cartAmount">159 Kč</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
