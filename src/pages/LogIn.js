import { NavLink } from 'react-router-dom';
import './LogIn.css';

export default function LogIn() {
  return (
    <div className="row login">
      <form className="loginForm">
        <h2 class="mb-5 fw-normal">Přihlásit se</h2>
        <input
          type="email"
          id="inputEmail"
          class="form-control mb-4 loginInput"
          placeholder="Email"
          required=""
          autofocus=""
        />
        <input
          type="password"
          id="inputPassword"
          class="form-control mb-5 loginInput"
          placeholder="Heslo"
          required=""
        />
        <button
          class="w-100 btn btn-success btn-lg mb-4 loginSubmit"
          type="submit"
        >
          Přihlásit
        </button>
        <NavLink to="/mysticshop/ResetPassword" className="loginInput mb-3">
          Zapomněli jste heslo?
        </NavLink>
        <NavLink to="/mysticshop/RegistrationForm" className="loginInput mb-3">
          Ještě nemáte účet?
        </NavLink>
      </form>
    </div>
  );
}
