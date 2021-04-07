import "./Cart.css";
import CartButton from "../components/CartButton";

export default function Cart3() {
  return (
    <>
      <div className="cart-navigation-wrapper">
        <CartButton to="Cart2" text="Zpět na výběr dopravy a platby" />
        <CartButton to="Cart4" text="Pokračovat na další krok" size="large" />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="cart-wrapper">
            <div className="cart-header">
              <h3 className="mb-3">
                Košík >>> Doprava a platba >>> Dodací údaje >>> Souhrn a
                potvrzení objednávky
              </h3>
            </div>
            <hr />
            <form className="mt-5">
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Jméno
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Jméno"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Příjmení
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Příjmení"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Ulice
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Javorová"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Číslo popisné / evidenční
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="111"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Obec / Město
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Praha 1"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    PSČ
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="101 00"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Stát
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Česká Republika"
                    disabled
                    required
                  />
                </div>
              </div>
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-2">
                  <label for="disabledTextInput" class="form-label">
                    Telefon
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="777 777 777"
                    disabled
                  />
                </div>
              </div>
              <button class="btn cart-change-contact-info-button">
                Změnit kontaktní údaje
              </button>
              <div class="row form-check g-3 align-items-center">
                <div class="col-12 cart-add-shipment-info">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Dodací údaje jsou odlišné od kontaktních údajů
                  </label>
                </div>
              </div>
            </form>

            <div className="cart-next">
              <span></span>
              <CartButton
                to="Cart4"
                text="Pokračovat na další krok"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
