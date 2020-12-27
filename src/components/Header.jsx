import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderTabs from "./HeaderTabs";
import HeaderMiddle from "./HeaderMiddle";
import close from "./../assets/svg/close-material.svg";
import MSLogoBile from "./../assets/MS_logo_bile.png";

export default function Header(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currency, setCurrency] = useState(true);
  return (
    <div className="fixed-top w-100 headerWrapper">
      <div className="w-100 topAlert">
        <div className="container">
          <div className="row">
            <div className="col-11 alertText">
              Lista s upozornenim - zkusebni text ---- Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quidem voluptatibus, magni
              totam, ullam eaque autem ut commodi ea repellendus, aliquid
              asperiores tenetur similique?, aliquid asperiores tenetur
              similique?
            </div>
            <div className="col-1 d-flex justify-content-end">
              <button
                onClick={() => {
                  props.setMessage(false);
                }}
              >
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2 logoWrapper">
            <a className="navbar-brand" href="/#">
              <img src={MSLogoBile} alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <ul className="list-unstyled list-inline pt-2 headerControls">
                  <li className="dropdown dropdown-small list-inline-item currency">
                    <a
                      href
                      className={`linkcurrency${currency ? " active" : ""}`}
                      onClick={() => {
                        setCurrency(true);
                      }}
                    >
                      CZK
                </a>
                /
                <a
                      href
                      className={`linkcurrency${!currency ? " active" : ""}`}
                      onClick={() => {
                        setCurrency(false);
                      }}
                    >
                      EUR
                </a>
                  </li>
                  <li className="list-inline-item">
                    <NavLink to="/mysticshop/doprava-platba">
                      Doprava a platba
                </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink to="/mysticshop/vernostni-program">
                      Věrnostní program
                </NavLink>
                  </li>
                  {loggedIn && (
                    <>
                      <li className="list-inline-item">
                        <NavLink to="/mysticshop/MyAccount" exact>
                          Můj účet
                    </NavLink>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          onClick={() => {
                            setLoggedIn(false);
                          }}
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
                          href="#"
                          onClick={() => {
                            setLoggedIn(true);
                          }}
                        >
                          Přihlásit se
                    </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <HeaderMiddle />
            </div>
          </div>
        </div>
      </div>
      <HeaderTabs />
    </div>
  );
}
