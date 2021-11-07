import './Cart.css';
import CartButton from '../components/CartButton';
import ArrowNext from '../assets/svg/arrow-next-material.svg';
import { useState } from 'react';

export default function Cart2() {
  const [radioChecked, setRadioChecked] = useState(null);
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
                <span className="cart-header-nav">Košík</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav-active">Doprava a platba</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav">Dodací údaje</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav">
                  Souhrn a potvrzení objednávky
                </span>
              </h3>
            </div>
            <hr />
            <div className="cart-shipment">
              <h4 className="cart-shipment-title">
                Zvolte prosím způsob dopravy:
              </h4>
              <div
                class="btn-group-vertical cart-shipment-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
                id="group1"
              >
                <div class="cart-shipment-button">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio1"
                    id="btnradio1"
                    autocomplete="off"
                    onChange={(e) => setRadioChecked(e.target.id)}
                  />
                  <label class="btn cart-shipment-label" for="btnradio1">
                    Zásilkovna
                    <strong>69 Kč</strong>
                  </label>
                </div>
                {radioChecked === 'btnradio1' && (
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
                )}
                <div class="cart-shipment-button">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio1"
                    id="btnradio2"
                    autocomplete="off"
                    onChange={(e) => setRadioChecked(e.target.id)}
                  />
                  <label class="btn cart-shipment-label" for="btnradio2">
                    Česká pošta - balík do ruky
                    <strong>99 Kč</strong>
                  </label>
                </div>
              </div>
            </div>
            <div className="cart-shipment">
              <h4 className="cart-shipment-title">
                Zvolte prosím způsob platby:
              </h4>
              <div
                class="btn-group-vertical cart-shipment-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
                id="group2"
              >
                <div class="cart-shipment-button">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio2"
                    id="btnradio3"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btnradio3">
                    Kartou online
                    <strong>0 Kč</strong>
                  </label>
                </div>
                <div class="cart-shipment-button">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio2"
                    id="btnradio4"
                    autocomplete="off"
                  />
                  <label class="btn cart-shipment-label" for="btnradio4">
                    Bankovním převodem
                    <strong>29 Kč</strong>
                  </label>
                </div>
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
