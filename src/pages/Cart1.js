import Delete from '../assets/svg/delete.svg';
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
                Košík >>> Doprava a platba >>> Dodací údaje >>> Souhrn a
                potvrzení objednávky
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
                  <td className="text-right">
                    <input type="number" min="1" />
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
                  <td className="text-right">
                    <input type="number" min="1" />
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
                  <td className="text-right">
                    <input type="number" min="1" />
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
                  <td className="text-right">
                    <input type="number" min="1" />
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
                  <td className="text-right">
                    <input type="number" min="1" />
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
                    type="number"
                    className="form-control cart-input-extra"
                    placeholder="Zadejte počet kreditů"
                    min="1"
                  />
                </div>
                <div>
                  <button type="submit" className="btn cart-button-extra">
                    Použít kredity
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-sm order-detail-table-second">
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
