import Delete from '../assets/svg/delete.svg';
import ArrowNext from '../assets/svg/arrow-next-material.svg';
import './Cart.css';
import CartButton from '../components/CartButton';
import Booster from './../assets/images/product-img/booster.jpg';
import Karta from './../assets/images/karta.jpg';
import Stav from '../assets/images/stav.png';

export default function Cart1() {
  return (
    <>
      <div className="cart-navigation-wrapper">
        <CartButton to="" text="Zpět k nakupování" />
        <CartButton to="Cart2" text="Pokračovat na další krok" size="large" />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="cart-wrapper">
            <div className="cart-header">
              <h3 className="mb-3">
                <span className="cart-header-nav-active">Košík</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav">Doprava a platba</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav">Dodací údaje</span>
                <img src={ArrowNext} alt="next" />
                <span className="cart-header-nav">
                  Souhrn a potvrzení objednávky
                </span>
              </h3>
              <div class="cart-items-number">5 ks</div>
            </div>
            <hr />
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
                  <th scope="col" className="text-right">
                    Odstranit
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
                  <td className="text-right quantity-wrapper">
                    <div className="quantity">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value="1"
                        className="cardInput"
                      />
                      <div className="quantity-nav">
                        <div className="quantity-button quantity-up">+</div>
                        <div className="quantity-button quantity-down">-</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">120 Kč</td>
                  <td className="text-right delete">
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
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
                  <td className="text-right quantity-wrapper">
                    <div className="quantity">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value="1"
                        className="cardInput"
                      />
                      <div className="quantity-nav">
                        <div className="quantity-button quantity-up">+</div>
                        <div className="quantity-button quantity-down">-</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">120 Kč</td>
                  <td className="text-right">
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
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
                  <td className="text-right quantity-wrapper">
                    <div className="quantity">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value="1"
                        className="cardInput"
                      />
                      <div className="quantity-nav">
                        <div className="quantity-button quantity-up">+</div>
                        <div className="quantity-button quantity-down">-</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">120 Kč</td>
                  <td className="text-right">
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
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
                  <th scope="col" className="text-right">
                    Odstranit
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
                  <td className="text-right quantity-wrapper">
                    <div className="quantity">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value="1"
                        className="cardInput"
                      />
                      <div className="quantity-nav">
                        <div className="quantity-button quantity-up">+</div>
                        <div className="quantity-button quantity-down">-</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">120 Kč</td>
                  <td className="text-right">
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-left cart-image-wrapper">
                    <div className="cart-image">
                      <img src={Booster} alt="recommended" />
                    </div>
                    Herní box xxxxxxxxx
                  </td>
                  <td className="text-right quantity-wrapper">
                    <div className="quantity">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value="1"
                        className="cardInput"
                      />
                      <div className="quantity-nav">
                        <div className="quantity-button quantity-up">+</div>
                        <div className="quantity-button quantity-down">-</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">120 Kč</td>
                  <td className="text-right">
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="cart-extra-wrapper">
              <div className="row">
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control cart-input-extra"
                    placeholder="Zadejte slevový kód"
                  />
                </div>
                <div>
                  <button type="submit" className="btn cart-button-extra">
                    Uplatnit slevu
                  </button>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control cart-input-extra"
                    placeholder="Zadejte počet kreditů"
                  />
                </div>
                <div>
                  <button type="submit" className="btn cart-button-extra">
                    Použít kredity
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-sm order-detail-table-second order-detail-table-summary">
              <thead className="cart-content-thead mt-2">
                <tr className="suma">
                  <th scope="col" className="text-left">
                    Cena celkem
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
            <div className="cart-next">
              <span></span>
              <CartButton
                to="Cart2"
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
