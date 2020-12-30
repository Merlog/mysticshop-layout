import { NavLink } from "react-router-dom";
import "./OrderList.css";

export default function OrderList() {
  return (
    <div className="row">
      <div className="col mb-5">
        <table className="table table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Číslo objednávky</th>
              <th scope="col" className="text-center">
                Datum
              </th>
              <th scope="col" className="text-center">
                Stav
              </th>
              <th scope="col" className="text-right">
                Celkem
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <NavLink to="/mysticshop/OrderDetail">
                <th scope="row">1111</th>
                <td className="text-center">1. 1. 2020</td>
                <td className="text-center">zaplacená</td>
                <td className="text-right">1 248 Kč</td>
              </NavLink>
            </tr>
            <tr>
              <th scope="row">
                <a href="/mysticshop/OrderDetail" className="link">
                  2222
                </a>
              </th>
              <td className="text-center">1. 5. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">348 Kč</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="/mysticshop/OrderDetail" className="link">
                  3333
                </a>
              </th>
              <td className="text-center">10. 9. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="/mysticshop/OrderDetail" className="link">
                  3333
                </a>
              </th>
              <td className="text-center">10. 9. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="/mysticshop/OrderDetail" className="link">
                  3333
                </a>
              </th>

              <td className="text-center">10. 9. 2020</td>
              <td className="text-center">čeká na platbu</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
