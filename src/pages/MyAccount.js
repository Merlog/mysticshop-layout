import { useState } from "react";
import "./MyAccount.css";

export default function MyAccount() {
  const [orders, setOrders] = useState(false);
  return (
    <div className="row">
      <div className="col-2 p-0 accountMenu">
        <button
          onClick={() => {
            setOrders(false);
          }}
        >
          <h5 className={`accountTitle ${orders ? "" : "accountTitleActive"}`}>
            Můj účet
          </h5>
        </button>
        <button
          onClick={() => {
            setOrders(true);
          }}
        >
          <h5 className={`accountTitle ${orders ? "accountTitleActive" : ""}`}>
            Mé objednávky
          </h5>
        </button>
      </div>
      {orders ? (
        <div className="col-10">obsah k objednávkám</div>
      ) : (
        <div className="col-10">obsah k účtu</div>
      )}
    </div>
  );
}
