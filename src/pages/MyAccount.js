import { Switch, Route, NavLink } from "react-router-dom";
import OrderList from "./OrderList";
import UserDetail from "./UserDetail";
import UserDiscount from "./UserDiscount";
import UserBonus from "./UserBonus";
import "./MyAccount.css";

export default function MyAccount() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="accountMenu">
          <NavLink
            to="/mysticshop/MyAccount/UserDetail"
            exact
            className="accountLink"
          >
            Můj účet
          </NavLink>
          <NavLink
            to="/mysticshop/MyAccount/OrderList"
            exact
            className="accountLink"
          >
            Mé objednávky
          </NavLink>
          <NavLink
            to="/mysticshop/MyAccount/UserDiscount"
            exact
            className="accountLink"
          >
            Mé slevy
          </NavLink>
          <NavLink
            to="/mysticshop/MyAccount/UserBonus"
            exact
            className="accountLink"
          >
            Bonus body
          </NavLink>
        </div>
      </div>
      <div className="col-10">
        <Switch>
          <Route path="/mysticshop/MyAccount/UserDetail" exact>
            <UserDetail />
          </Route>
          <Route path="/mysticshop/MyAccount/UserDiscount" exact>
            <UserDiscount />
          </Route>
          <Route path="/mysticshop/MyAccount/UserBonus" exact>
            <UserBonus />
          </Route>
          <Route path="/mysticshop/MyAccount/OrderList" exact>
            <OrderList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
