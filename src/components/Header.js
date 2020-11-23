import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from './../assets/logo1.png'

export default function Header() {
  return (
    <div className="fixed-top w-100 headerWrapper">
      <div className="row temorarymenu">
        <div className="col">
          <ul>
            <NavLink to="/Homepage" exact>
              Homepage
        </NavLink>
            <NavLink to="/OrderDetail" exact>
              Order Detail
        </NavLink>
            <NavLink to="/ContactForm" exact>
              Contact Form
        </NavLink>
            <NavLink to="/Cart1" exact>
              Cart1
        </NavLink>
            <NavLink to="/Cart2" exact>
              Cart2
        </NavLink>
            <NavLink to="/Cart3" exact>
              Cart3
        </NavLink>
            <NavLink to="/RegistrationForm" exact>
              Registration Form
        </NavLink>
            <NavLink to="/FullSearch" exact>
              Full Search
        </NavLink>
            <NavLink to="/OrderList" exact>
              Order List
        </NavLink>
            <NavLink to="/UserSettings" exact>
              User Settings
        </NavLink>
          </ul>
        </div>
      </div>
      <div className="container" >
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <ul className="nav justify-content-end headerTop">
                  <select>
                    <option selected>CZK</option>
                    <option value="1">EUR</option>
                  </select>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Muj účet
                    </a>
                    <div className="dropdown-menu">
                      <a className="nav-link active" href="#">
                        Muj účet
                      </a>
                      <a className="nav-link active" href="#">
                        Moje Objednávky
                      </a>
                      <a className="nav-link active" href="#">
                        Bonus body
                      </a>
                      <a className="nav-link active" href="#">
                        Odhlasit
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row navMidle">
              <div className="col-2">
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="col-5 my-3">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 customW400"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-dark my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-2 pt30">
                <a className="" href="#">
                  Bonus: 20 bodů
                </a>
              </div>
              <div className="col-3 pt30">
                <a className="Kosik" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="cart-ico"
                  >
                    <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                  </svg>
                  Košík: 159 kč
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <ul className="nav nav-tabs headerBottom">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Bonusový program
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Karetní hry
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Věrnostní sleva ???
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Jak nakupovat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
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
