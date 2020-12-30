import { NavLink } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="row d-flex justify-content-center align-items-center my-3">
      <form>
        <h2 class="h3 mb-3 fw-normal">Přihlásit se</h2>
        <label for="inputEmail" class="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="visually-hidden">
          Heslo
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Heslo"
          required=""
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Zapamatovat
          </label>
        </div>
        <button class="w-100 btn btn-success" type="submit">
          Přihlásit
        </button>
        <NavLink to="/mysticshop/ResetPassword">Zapomněli jste heslo?</NavLink>
        <div className="my-4">
          <h4>Ještě nemáte účet?</h4>
          <NavLink to="/mysticshop/RegistrationForm">
            <button className="w-100 btn btn-success">
              Vytvořit účet / Zaregistrovat
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
