export default function Cart2() {
  return (
    <div className="row">
      <div className="col-md-12  my-4">
        <ul className="nav mb-5">
          <li className="nav-item">
            <a className="cartPageLink disabled" href="#">
              <span className="cartPageNumber">1</span>
              <button type="button" className="btn disabled">
                Košík
              </button>
            </a>
          </li>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right cartPageArrow"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
            />
          </svg>
          <li className="nav-item">
            <a className="cartPageLink" href="#">
              <span className="cartPageNumber">2</span>
              <button type="button" className="btn">
                Doprava a platba
              </button>
            </a>
          </li>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right cartPageArrow"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
            />
          </svg>
          <li className="nav-item">
            <a className="disabled cartPageLink" href="#">
              <span className="cartPageNumber">3</span>
              <button type="button" className="btn disabled">
                Souhrn
              </button>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-8 order-md-1">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-3">Způsob dopravy</h4>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input"
                checked
              />
              <label className="custom-control-label" for="customRadio1">
                Zásilkovna - ČR <div className="d-inline-block">80 Kč</div>
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" for="customRadio2">
                Zásilkovna - Slovensko{" "}
                <div className="d-inline-block">100 Kč</div>
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio3"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" for="customRadio3">
                Zásilkovna - Výdejní místo{" "}
                <div className="d-inline-block">60 Kč</div>
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="mb-3">Způsob platby</h4>
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                checked
                required
              />
              <label className="custom-control-label" for="credit">
                Kartou online
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required
              />
              <label className="custom-control-label" for="debit">
                Převodem
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required
              />
              <label className="custom-control-label" for="paypal">
                PayPal
              </label>
            </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-md-8">
            <p>Máte u nás účet? Přihlaste se a my vše vyplníme za Vás.</p>
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-primary btn-sm">
              Přihlásit se
            </button>
          </div>
          <div className="col-md-8">
            <p>Ještě nemáte účet? Registrujte se a získejte všechny výhody.</p>
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-primary btn-sm">
              Vytvořit nový účet
            </button>
          </div>
          <div className="col-md-12">
            <p>
              Nepřejete si se registrovat? V tom případě vyplňte údaje níže pro
              nákup bez registrace.
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <h5>Kontaktní údaje</h5>
        <form className="needs-validation" novalidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName">Jméno</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName">Příjmení</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="phone">Telefon</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid phone number is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
          </div>
          <hr className="mb-4" />
          <h5>Fakturační údaje</h5>
          <div className="mb-3">
            <label for="address">Ulice a č. p.</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <label for="address2">Obec</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            <div className="col-md-2 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
            <div className="col-md-5 mb-3">
              <label for="country">Stát</label>
              <select
                className="custom-select d-block w-100"
                id="country"
                required
              >
                <option>Česká Republika</option>
                <option>Slovensko</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <hr className="mb-4" />
          </div>
          <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="same-address"
            />
            <label className="custom-control-label" for="same-address">
              Zaslat zboží na jinou adresu
            </label>
          </div>
          <hr className="mb-4" />
          <h5>Poznámky</h5>
          <div className="input-group">
            <textarea
              id="notes"
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <hr className="mb-4" />
          <div className="d-flex justify-content-between my-4">
            <button type="button" className="btn btn-primary">
              Zpět do košíku
            </button>
            <button type="button" className="btn btn-primary">
              Pokračovat v objednávce
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
