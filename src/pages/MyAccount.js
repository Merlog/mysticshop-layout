import { useState } from "react";
import "./MyAccount.css";
import OrderList from "./OrderList";
import UserDetail from "./UserDetail";

export default function MyAccount() {
  const [orders, setOrders] = useState(false);
  return (
    <div className="row">
      <div className="col-2">
        <div className="accountMenu">
          <button
            onClick={() => {
              setOrders(false);
            }}
          >
            <h5
              className={`accountTitle ${orders ? "" : "accountTitleActive"}`}
            >
              Můj účet
            </h5>
          </button>
          <button
            onClick={() => {
              setOrders(true);
            }}
          >
            <h5
              className={`accountTitle ${orders ? "accountTitleActive" : ""}`}
            >
              Mé objednávky
            </h5>
          </button>
        </div>
      </div>
      {orders ? (
        <div className="col-10">
          <OrderList />
        </div>
      ) : (
        <div className="col-10">
          <UserDetail />
        </div>
      )}
    </div>
  );
}
