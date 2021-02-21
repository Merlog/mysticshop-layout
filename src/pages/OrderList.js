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
                <h4 className="mb-4">Číslo objednávky</h4>
              </th>
              <th scope="col" className="text-center">
                <h4 className="mb-4">Datum</h4>
              </th>
              <th scope="col" className="text-center">
                <h4 className="mb-4">Stav</h4>
              </th>
              <th scope="col" className="text-right">
                <h4 className="mb-4">Celkem</h4>
              </th>
            </tr>
          </thead>
          <tbody className="order-list-body">
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">1111111</NavLink>
              </td>
              <td className="text-center">1. 1. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">1 248 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">2222222</NavLink>
              </td>
              <td className="text-center">1. 5. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">348 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
              <td className="text-center">10. 9. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
              <td className="text-center">10. 9. 2020</td>
              <td className="text-center">zaplacená</td>
              <td className="text-right">1 548 Kč</td>
            </tr>
            <tr>
              <td>
                <NavLink to="/mysticshop/OrderDetail">3333333</NavLink>
              </td>
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
