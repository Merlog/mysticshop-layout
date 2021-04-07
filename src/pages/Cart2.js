import "./Cart.css";
import CartButton from "../components/CartButton";

export default function Cart2() {
  return (
    <>
      <div className="cart-navigation-wrapper">
        <CartButton to="Cart1" text="Zpět do košíku" />
        <CartButton to="Cart3" text="Pokračovat na další krok" size="large" />
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
            <div className="cart-shipment">
              <h4 className="cart-shipment-title">
                Zvolte prosím způsob dopravy:
              </h4>
              <div
                class="btn-group-vertical cart-shipment-button"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btncheck1">
                    Zásilkovna
                  </label>
                </div>
                <div>69 Kč</div>
              </div>
              <div>
                <label for="zasilkovna" className="mr-2">
                  Zvolte si prosím pobočku
                </label>
                <select name="zasilkovna" id="zasilkovna">
                  <option value="1">Na Poříčí 22, Praha 1</option>
                  <option value="2">Jablonecká 8, Praha 4</option>
                  <option value="3">Vysočanská 55, Praha 9</option>
                  <option value="4">Na stráni 567, Praha 2</option>
                </select>
              </div>
              <div
                class="btn-group-vertical cart-shipment-button"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btncheck1">
                    Česká pošta - balík do ruky
                  </label>
                </div>
                <div>89 Kč</div>
              </div>
            </div>
            <div className="cart-shipment">
              <h4 className="cart-shipment-title">
                Zvolte prosím způsob platby:
              </h4>
              <div
                class="btn-group-vertical cart-shipment-button"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btncheck1">
                    Kartou online
                  </label>
                </div>
                <div>0 Kč</div>
              </div>
              <div
                class="btn-group-vertical cart-shipment-button"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btncheck1">
                    Bankovním převodem
                  </label>
                </div>
                <div>29 Kč</div>
              </div>
            </div>
            <div className="cart-next">
              <span></span>
              <CartButton
                to="Cart3"
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
