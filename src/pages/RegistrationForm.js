import CartButton from '../components/CartButton';
import { NavLink } from 'react-router-dom';
import './RegistrationForm.css';

export default function RegistrationForm() {
  return (
    <div className="row registration">
      <CartButton to="/LogIn" text="Zpět na přihlášení" />
      <form
        className="registrationForm"
        onSubmit={() =>
          alert(
            'Registrace proběhla úspěšně. Na zadaný e-mail jsme odeslali potvrzení o registraci.'
          )
        }
      >
        <h2 class="mb-5 fw-normal">Registrační údaje</h2>
        <div className="registrationFlex">
          <div className="registrationFlexItem">
            <input
              type="email"
              id="inputEmail"
              class="form-control registrationInput"
              placeholder="Email"
              required=""
              autofocus=""
            />
            <small
              id="emailHelp"
              className="form-text text-muted mb-4 registrationEmailText"
            >
              E-mail slouží zároveň jako uživatelské jméno.
            </small>
          </div>
          <div className="registrationFlexItem">
            <input
              type="password"
              id="inputPassword"
              class="form-control mb-5 registrationInput"
              placeholder="Heslo"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputFirstname"
              class="form-control mb-5 registrationInput"
              placeholder="Jméno"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputLastname"
              class="form-control mb-5 registrationInput"
              placeholder="Příjmení"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputStreet"
              class="form-control mb-5 registrationInput"
              placeholder="Ulice"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputStreetNumber"
              class="form-control mb-5 registrationInput"
              placeholder="Číslo popisné/evidenční"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputCity"
              class="form-control mb-5 registrationInput"
              placeholder="Město/Obec"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="number"
              id="inputPostcode"
              class="form-control mb-5 registrationInput"
              placeholder="PSČ"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="text"
              id="inputCountry"
              class="form-control mb-5 registrationInput"
              placeholder="Stát"
              required=""
            />
          </div>
          <div className="registrationFlexItem">
            <input
              type="number"
              id="inputPhone"
              class="form-control mb-5 registrationInput"
              placeholder="Telefonní číslo"
              required=""
            />
          </div>
        </div>
        <div className="bussinessConditions">
          <input type="checkbox" value="" id="defaultCheck1" />
          <label className="font-weight-bolder pl-2" for="defaultCheck1">
            Souhlasím s&nbsp;
            <NavLink
              to="/mysticshop/BussinessConditions"
              className="registrationLink"
              exact
            >
              obchodními podmínkami
            </NavLink>
          </label>
        </div>
        <div className="captcha">Captcha</div>
        <button
          class="w-100 btn btn-success btn-lg mb-4 registrationSubmit"
          type="submit"
        >
          Zaregistrovat se
        </button>
      </form>
    </div>
  );
}
