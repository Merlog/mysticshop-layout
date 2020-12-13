import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderTabs from "./HeaderTabs";
import HeaderMiddle from "./HeaderMiddle";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currency, setCurrency] = useState(true);
  return (
    <div className="header">
      <div className="fixed-top w-100 headerControls">
        <div className="container headerTop">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <ul className="list-unstyled list-inline pt-2">
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
                        href
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
                        href
                      >
                        Přihlásit se
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <HeaderMiddle />
        </div>
        <HeaderTabs />
      </div>
    </div>
  );
}
