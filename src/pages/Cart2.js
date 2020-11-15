export default function Cart2() {
  return (
    <div class="container" style={{ marginTop: "360px" }}>
      <div class="row">
        <div class="col-md-12  my-4">
          <ul class="nav mb-5">
            <li class="nav-item">
              <a class="cartPageLink disabled" href="#">
                <span class="cartPageNumber">1</span>
                <button type="button" class="btn disabled">
                  Košík
                </button>
              </a>
            </li>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-right cartPageArrow"
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
            <li class="nav-item">
              <a class="cartPageLink" href="#">
                <span class="cartPageNumber">2</span>
                <button type="button" class="btn">
                  Doprava a platba
                </button>
              </a>
            </li>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-right cartPageArrow"
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
            <li class="nav-item">
              <a class="disabled cartPageLink" href="#">
                <span class="cartPageNumber">3</span>
                <button type="button" class="btn disabled">
                  Souhrn
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Košík</span>
            <span class="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <img src="./assets/booster.jpg" class="cartProductImage" />
              <h6 class="my-0 cartProductName">Název produktu</h6>
              <span class="cartProductPrice">100 Kč</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <img src="./assets/booster_pack.jpg" class="cartProductImage" />
              <h6 class="my-0 cartProductName">Název dalšího produktu</h6>
              <span class="cartProductPrice">200 Kč</span>
            </li>
            {/* <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li> */}
            <li class="list-group-item d-flex justify-content-between">
              <strong>Celkem</strong>
              <div class="d-flex flex-column">
                <small class="text-muted">s DPH</small>
                <strong>280 Kč</strong>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <div class="row">
            <div class="col-md-6">
              <h4 class="mb-3">Způsob dopravy</h4>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="customRadio1">
                  Zásilkovna - ČR <div class="d-inline-block">80 Kč</div>
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2">
                  Zásilkovna - Slovensko{" "}
                  <div class="d-inline-block">100 Kč</div>
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio3">
                  Zásilkovna - Výdejní místo{" "}
                  <div class="d-inline-block">60 Kč</div>
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <h4 class="mb-3">Způsob platby</h4>
              <div class="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked
                  required
                />
                <label class="custom-control-label" for="credit">
                  Kartou online
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="debit">
                  Převodem
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="paypal">
                  PayPal
                </label>
              </div>
            </div>
          </div>
          <hr class="mb-4" />
          <div class="row">
            <div class="col-md-8">
              <p>Máte u nás účet? Přihlaste se a my vše vyplníme za Vás.</p>
            </div>
            <div class="col-md-4">
              <button type="button" class="btn btn-primary btn-sm">
                Přihlásit se
              </button>
            </div>
            <div class="col-md-8">
              <p>
                Ještě nemáte účet? Registrujte se a získejte všechny výhody.
              </p>
            </div>
            <div class="col-md-4">
              <button type="button" class="btn btn-primary btn-sm">
                Vytvořit nový účet
              </button>
            </div>
            <div class="col-md-12">
              <p>
                Nepřejete si se registrovat? V tom případě vyplňte údaje níže
                pro nákup bez registrace.
              </p>
            </div>
          </div>
          <hr class="mb-4" />
          <h5>Kontaktní údaje</h5>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Jméno</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Příjmení</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="phone">Telefon</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid phone number is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
            </div>
            <hr class="mb-4" />
            <h5>Fakturační údaje</h5>
            <div class="mb-3">
              <label for="address">Ulice a č. p.</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="address2">Obec</label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div class="col-md-2 mb-3">
                <label for="zip">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Zip code required.</div>
              </div>
              <div class="col-md-5 mb-3">
                <label for="country">Stát</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option>Česká Republika</option>
                  <option>Slovensko</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <hr class="mb-4" />
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="same-address"
              />
              <label class="custom-control-label" for="same-address">
                Zaslat zboží na jinou adresu
              </label>
            </div>
            <hr class="mb-4" />
            <h5>Poznámky</h5>
            <div class="input-group">
              <textarea
                id="notes"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <hr class="mb-4" />
            <div class="d-flex justify-content-between my-4">
              <button type="button" class="btn btn-primary">
                Zpět do košíku
              </button>
              <button type="button" class="btn btn-primary">
                Pokračovat v objednávce
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
