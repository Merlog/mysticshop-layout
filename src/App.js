import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomepagePage from "./pages/HomepagePage";

import Cart1 from "./pages/Cart1";
import Cart2 from "./pages/Cart2";
import Cart3 from "./pages/Cart3";
import ContactForm from "./pages/ContactForm";
import FullSearch from "./pages/FullSearch";
import OrderDetail from "./pages/OrderDetail";
import OrderList from "./pages/OrderList";
import RegistrationForm from "./pages/RegistrationForm";
import UserSettings from "./pages/UserSettings";
import Contact from "./pages/Contact";
import BussinessConditions from "./pages/BussinessConditions";
import MyAccount from "./pages/MyAccount";

export default function App() {
  const [message, setMessage] = useState(true);
  return (
    <div className={`app${message ? " appWithMessage" : ""}`}>
      <div className="row temporary">
        <div>
          <NavLink to="/mysticshop" exact>
            Homepage
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/OrderDetail" exact>
            Order Detail
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/ContactForm" exact>
            Contact Form
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/Cart1" exact>
            Cart1
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/Cart2" exact>
            Cart2
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/Cart3" exact>
            Cart3
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/RegistrationForm" exact>
            Registration Form
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/FullSearch" exact>
            Full Search
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/OrderList" exact>
            Order List
          </NavLink>
        </div>
        <div>
          <NavLink to="/mysticshop/UserSettings" exact>
            User Settings
          </NavLink>
        </div>
        <a
          href
          className={`linkcurrency${message ? " active" : ""}`}
          onClick={() => {
            setMessage(!message);
          }}
        >
          Horní lišta
        </a>
      </div>
      <Header />
      <div className="container main">
        <Redirect to={`${process.env.PUBLIC_URL}/`} />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <HomepagePage />
          </Route>
          <Route path="/OrderDetail" exact>
            <OrderDetail />
          </Route>
          <Route path="/ContactForm" exact>
            <ContactForm />
          </Route>
          <Route path="/Cart1" exact>
            <Cart1 />
          </Route>
          <Route path="/Cart2" exact>
            <Cart2 />
          </Route>
          <Route path="/Cart3" exact>
            <Cart3 />
          </Route>
          <Route path="/RegistrationForm" exact>
            <RegistrationForm />
          </Route>
          <Route path="/FullSearch" exact>
            <FullSearch />
          </Route>
          <Route path="/OrderList" exact>
            <OrderList />
          </Route>
          <Route path="/UserSettings" exact>
            <UserSettings />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Route path="/BussinessConditions" exact>
            <BussinessConditions />
          </Route>
          <Route path="/MyAccount" exact>
            <MyAccount />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
