import Zpet from "../components/Zpet";
import "./OrderDetail.css";
import Booster from "./../assets/images/product-img/booster.jpg";
import Karta from "./../assets/images/karta.jpg";

export default function OrderDetail() {
  return (
    <>
      <Zpet to="MyAccount/OrderList" />
      <div className="row">
        <div className="col-12">
          <div className="order-detail">
            <h3 className="mb-3">Objednávka č. 12334455</h3>
            <hr />
            <div className="mb-3">
              <a href="https://trasovacilink.cz" target="blank">
                Trasovací link <nbsp />
              </a>
              <small>
                (bude vidět pouze než bude objednávka doručena příjemci)
              </small>
            </div>
            <span className="order-detail-label mb-4">Vyřízená</span>
            <table className="table table-sm order-detail-table">
              <thead className="order-detail-table-header">
                <tr>
                  <th scope="col" className="text-left">
                    Kusovky
                  </th>
                  <th scope="col" className="text-center">
                    Počet ks
                  </th>
                  <th scope="col" className="text-center">
                    Cena za ks
                  </th>
                  <th scope="col" className="text-right">
                    Celkem
                  </th>
                </tr>
              </thead>
              <tbody className="order-detail-table-body">
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta xxxxxxxxx
                  </td>
                  <td className="text-center">1 ks</td>
                  <td className="text-center">120 Kč</td>
                  <td className="text-right">120 Kč</td>
                </tr>
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                  </td>
                  <td className="text-center">2 ks</td>
                  <td className="text-center">80 Kč</td>
                  <td className="text-right">160 Kč</td>
                </tr>
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                  </td>
                  <td className="text-center">2 ks</td>
                  <td className="text-center">80 Kč</td>
                  <td className="text-right">160 Kč</td>
                </tr>
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                  </td>
                  <td className="text-center">2 ks</td>
                  <td className="text-center">80 Kč</td>
                  <td className="text-right">160 Kč</td>
                </tr>
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Karta} alt="recommended" />
                    </div>
                    Karta2 xxxxxxxxx
                  </td>
                  <td className="text-center">2 ks</td>
                  <td className="text-center">80 Kč</td>
                  <td className="text-right">160 Kč</td>
                </tr>
              </tbody>
              <div className="mt-4"></div>
              <thead className="order-detail-table-header mt-2">
                <tr>
                  <th scope="col" className="text-left">
                    Zboží z katalogu
                  </th>
                  <th scope="col" className="text-center">
                    Počet ks
                  </th>
                  <th scope="col" className="text-center">
                    Cena za ks
                  </th>
                  <th scope="col" className="text-right">
                    Celkem
                  </th>
                </tr>
              </thead>
              <tbody className="order-detail-table-body">
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Booster} alt="recommended" />
                    </div>
                    Obal xxxxxx
                  </td>
                  <td className="text-center">3 ks</td>
                  <td className="text-center">40 Kč</td>
                  <td className="text-right">120 Kč</td>
                </tr>
                <tr>
                  <td className="text-left table-image-wrapper">
                    <div className="table-image">
                      <img src={Booster} alt="recommended" />
                    </div>
                    Herní box xxxxxxxxx
                  </td>
                  <td className="text-center">1 ks</td>
                  <td className="text-center">280 Kč</td>
                  <td className="text-right">280 Kč</td>
                </tr>
              </tbody>
              <div className="mt-4"></div>
            </table>
            <table className="table table-sm order-detail-table-second">
              <thead className="order-detail-table-header mt-2">
                <tr>
                  <th scope="col" className="text-left">
                    Doprava a platba
                  </th>
                  <th scope="col"></th>
                  <th scope="col" className="text-center">
                    Typ
                  </th>
                  <th scope="col" className="text-right">
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody className="order-detail-table-body">
                <tr>
                  <td className="text-left">Doprava</td>
                  <td></td>
                  <td className="text-center">Zásilkovna ČR</td>
                  <td className="text-right">59 Kč</td>
                </tr>
                <tr>
                  <td className="text-left">Platba</td>
                  <td></td>
                  <td className="text-center">Dobírkou</td>
                  <td className="text-right">30 Kč</td>
                </tr>
              </tbody>
              <div className="mt-4"></div>
              <thead className="order-detail-table-header mt-2">
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
              <tbody className="order-detail-table-body">
                <tr>
                  <td className="text-left">bez DPH</td>
                  <td></td>
                  <td></td>
                  <td className="text-right">1 024 Kč</td>
                </tr>
              </tbody>
              <div className="mt-5"></div>
              <thead className="order-detail-table-header mt-2">
                <tr>
                  <th scope="col" className="text-left">
                    Fakturační údaje
                  </th>
                </tr>
              </thead>
              <tbody className="order-detail-table-body">
                <tr>
                  <td className="text-left">Jana Nováková</td>
                </tr>
                <tr>
                  <td className="text-left">Přípotoční 28</td>
                </tr>
                <tr>
                  <td className="text-left">100 00 Praha 1</td>
                </tr>
                <tr>
                  <td className="text-left">Česká republika</td>
                </tr>
                <tr>
                  <td className="text-left">+420 777 777 777</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
