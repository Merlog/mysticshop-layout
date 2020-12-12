import "./Header.css";
import logo from "./../assets/logo1.png";
import cart from "./../assets/svg/cart-material.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./../assets/svg/search-material.svg";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currency, setCurrency] = useState(true);
  return (
    <div className="header">
      <div className="fixed-top w-100 headerWrapper headerTop">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <ul className="list-unstyled list-inline pt-1">
                <li className="dropdown dropdown-small list-inline-item currency">
                  <a
                    className={`linkcurrency${currency ? " active" : ""}`}
                    onClick={() => {
                      setCurrency(true);
                    }}
                  >
                    CZK
                  </a>
                  /
                  <a
                    className={`linkcurrency${!currency ? " active" : ""}`}
                    onClick={() => {
                      setCurrency(false);
                    }}
                  >
                    EUR
                  </a>
                </li>
                {loggedIn && (
                  <>
                    <li className="list-inline-item">
                      <NavLink to="/MyAccount" exact>
                        Můj účet
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <a
                        onClick={() => {
                          setLoggedIn(false);
                        }}
                        href="/"
                      >
                        Odhlásit se
                      </a>
                    </li>
                  </>
                )}
                {!loggedIn && (
                  <>
                    <li className="list-inline-item">
                      <a
                        onClick={() => {
                          setLoggedIn(true);
                        }}
                        href="/"
                      >
                        Přihlásit se
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="row navMidle mb-3">
            <div className="col-3">
              <a className="navbar-brand mainLogo" href="/#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="col-6">
              <form className="form-inline my-2 searchWrapper">
                <input
                  className="form-control w-100"
                  type="search"
                  placeholder="Vyhledat"
                ></input>
                <button className="btn searchButton" type="submit">
                  <img src={Search} alt="search"></img>
                </button>
              </form>
            </div>
            <div className="col-3 d-flex flex-row justify-content-end">
              <div className="bonus">
                <NavLink to="/MyAccount" exact>
                  <span>Bonus: </span>
                  <span className="cartAmount">20 b.</span>
                </NavLink>
              </div>
              <div className="cart">
                <NavLink to="/Cart1" exact>
                  <img src={cart} alt="logo" />
                  <span className="badge cartItems">1 ks</span>
                  <span className="cartAmount">159 Kč</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 headerWrapper headerLast">
          <div className="container">
            <div className="row">
              <div className="col col-lg-12">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <NavLink to="/#" exact>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/BonusProgram" exact>
                      Bonusový program
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/CardGames" exact>
                      Karetní hry
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/LoyaltyDiscount" exact>
                      Věrnostní sleva ???
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/HowTo" exact>
                      Jak nakupovat
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://www.mysticshop.cz/blog/"
                      target="blank"
                      exact
                    >
                      Blog Mudrc
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
