import { NavLink } from "react-router-dom";
import "./OrderList.css";

export default function OrderList() {
  return (
    <div className="row order-list">
      <div className="col-12">
        <table className="table table-hover table-sm">
          <thead className="order-list-header">
            <tr>
              <th scope="col">
               Číslo objednávky
              </th>
              <th scope="col" className="text-right">
               Datum
              </th>
              <th scope="col" className="text-right">
               Stav
              </th>
              <th scope="col" className="text-right">
               Celkem
              </th>
            </tr>
          </thead>
          <tbody className="order-list-body">
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">1111111</NavLink>
              </td>
              <td className="text-right">1. 1. 2020</td>
              <td className="text-right">zaplacená</td>
              <td className="text-right">1 248 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">2222222</NavLink>
              </td>
              <td className="text-right">1. 5. 2020</td>
              <td className="text-right">zaplacená</td>
              <td className="text-right">348 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
              <td className="text-right">10. 9. 2020</td>
              <td className="text-right">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
              <td className="text-right">10. 9. 2020</td>
              <td className="text-right">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
              <td className="text-right">10. 9. 2020</td>
              <td className="text-right">čeká na platbu</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
