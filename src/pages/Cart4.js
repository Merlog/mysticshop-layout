import "./Cart.css";
import CartButton from "../components/CartButton";
import Booster from "./../assets/images/product-img/booster.jpg";
import Karta from "./../assets/images/karta.jpg";
import Stav from "../assets/images/stav.png";

export default function Cart3() {
  return (
    <>
      <div className="cart-navigation-wrapper">
        <CartButton to="Cart3" text="Zpět na dodací údaje" />
        <CartButton
          to="Cart4"
          text="Potvrdit a odeslat objednávku"
          size="large"
        />
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

            <h4 className="my-4">Rekapitulace košíku:</h4>
            <table className="table table-sm cart-content">
              <thead className="cart-content-thead">
                <tr>
                  <th scope="col" className="text-left">
                    Kusovky
                  </th>
                  <th scope="col" className="text-right">
                    Počet ks
                  </th>
                  <th scope="col" className="text-right">
                    Celkem
                  </th>
                </tr>
              </thead>
              <tbody className="cart-content-tbody">
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta xxxxxxxxx
                    <img src={Stav} className="" alt="stav" width="25px" />
                    <img src={Stav} className="" alt="foil" width="25px" />
                  </td>
                  <td className="text-right">2</td>
                  <td className="text-right">120 Kč</td>
                </tr>
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                    <img src={Stav} className="" alt="stav" width="25px" />
                    <img src={Stav} className="" alt="foil" width="25px" />
                  </td>
                  <td className="text-right">2</td>
                  <td className="text-right">120 Kč</td>
                </tr>
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                    <img src={Stav} className="" alt="stav" width="25px" />
                    <img src={Stav} className="" alt="foil" width="25px" />
                  </td>
                  <td className="text-right">2</td>
                  <td className="text-right">120 Kč</td>
                </tr>
              </tbody>
              <div className="mt-4"></div>
              <thead className="cart-content-thead mt-2">
                <tr>
                  <th scope="col" className="text-left">
                    Zboží z katalogu
                  </th>
                  <th scope="col" className="text-right">
                    Počet ks
                  </th>
                  <th scope="col" className="text-right">
                    Celkem
                  </th>
                </tr>
              </thead>
              <tbody className="cart-content-tbody">
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Booster} alt="recommended" />
                    </div>
                    Obal xxxxxx
                  </td>
                  <td className="text-right">2</td>
                  <td className="text-right">120 Kč</td>
                </tr>
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Booster} alt="recommended" />
                    </div>
                    Herní box xxxxxxxxx
                  </td>
                  <td className="text-right">2</td>
                  <td className="text-right">120 Kč</td>
                </tr>
              </tbody>
            </table>

            <div className="cart-summary-section">
              <div className="cart-summary-discounts">
                <p>Uplatněná sleva na objednávku</p>
                <p>- 89 Kč</p>
              </div>
              <div className="cart-summary-discounts">
                <p>Uplatněné kredity v celkové výši</p>
                <p>- 142 Kč</p>
              </div>
            </div>

            <h4 className="my-4">Doprava a platba:</h4>
            <div className="cart-summary-section">
              <div className="cart-summary-shipment">
                <p>Zásilkovna</p>
                <p>69 Kč</p>
              </div>
              <div className="cart-summary-shipment">
                <p>Kartou online</p>
                <p>0 Kč</p>
              </div>
            </div>

            <h4 className="my-4">Celková cena:</h4>
            <table className="table table-sm order-detail-table-second">
              <thead className="cart-content-thead mt-2">
                <tr className="suma">
                  <th scope="col" className="text-left">
                    Cena včetně DPH
                  </th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" className="text-right">
                    1 289 Kč
                  </th>
                </tr>
              </thead>
              <tbody className="cart-content-tbody">
                <tr>
                  <td className="text-left">bez DPH</td>
                  <td></td>
                  <td></td>
                  <td className="text-right">1 024 Kč</td>
                </tr>
              </tbody>
            </table>

            <h4 className="my-4">Kontaktní údaje:</h4>
            <p>Jméno a Příjmení</p>
            <p>Ulice a číslo popisné</p>
            <p>Obec / Město, PSČ</p>
            <p>Stát</p>
            <p>Telefon</p>

            <div className="cart-confirm">
              <span></span>
              <CartButton
                to="Cart4"
                text="Potvrdit a odeslat objednávku"
                size="large"
              />
              <div>
                <label class="form-check-label" for="exampleCheck1">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    defaultChecked
                  />
                  <span className="user-detail-checkbox-label">
                    Přeji si být informován emailem o novinkách na MysticShopu
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
