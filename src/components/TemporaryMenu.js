import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TemporaryMenu(props) {
  const { message, setMessage, setCookieAlert, cookieAlert } = props;

  return (
    <div className="row temporary">
      <div>
        <NavLink to="/mysticshop/prototypes" exact>
          Prototypes
        </NavLink>
      </div>
      <div>
        <NavLink to="/mysticshop/RegistrationForm" exact>
          Registration Form
        </NavLink>
      </div>

      <a
        href
        className={`linkcurrency${message ? " active" : ""}`}
        onClick={() => {
          setMessage(!message);
        }}
      >
        Horní lišta
      </a>
      <a
        href
        className={`linkcurrency${cookieAlert ? " active" : ""}`}
        onClick={() => {
          setCookieAlert(!cookieAlert);
        }}
      >
        Spodní cookie lišta
      </a>
    </div>
  );
}
