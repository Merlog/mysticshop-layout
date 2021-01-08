import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomepagePage from "./pages/HomepagePage";
import ProduktDetailPage from "./pages/ProduktDetailPage";
import KartaDetailPage from "./pages/KartaDetailPage";
import Aktualita from "./pages/Aktualita";
import CookieAlert from "./components/CookieAlert";
import Cart1 from "./pages/Cart1";
import Cart2 from "./pages/Cart2";
import Cart3 from "./pages/Cart3";
import ContactForm from "./pages/ContactForm";
import OrderDetail from "./pages/OrderDetail";
import OrderList from "./pages/OrderList";
import RegistrationForm from "./pages/RegistrationForm";
import Contact from "./pages/Contact";
import BussinessConditions from "./pages/BussinessConditions";
import MyAccount from "./pages/MyAccount";
import BuyCards from "./pages/BuyCards";
import SellCards from "./pages/SellCards";
import Products from "./pages/Products";
import Accessories from "./pages/Accessories";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import ShipmentPayment from "./pages/ShipmentPayment";
import SellCardsHow from "./pages/SellCardsHow";
import StavKartyPage from "./pages/StavKarty";
import GDPR from "./pages/GDPR";
import NewsPage from "./pages/NewsPage";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  const [message, setMessage] = useState(false);
  const [light, setLight] = useState(false);
  const [cookieAlert, setCookieAlert] = useState(false);
  const [red, setRed] = useState(false);

  return (
    <div
      className={`app${message ? " appWithMessage" : ""}${light ? " appLightTheme" : ""
        }${red ? " appRed" : ""
        }`}
    >
      <div className="row temporary">
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
        <a
          href
          className={`linkcurrency${light ? " active" : ""}`}
          onClick={() => {
            setLight(!light);
          }}
        >
          Light Theme
        </a>
        <a
          href
          className={`linkcurrency${message ? " active" : ""}`}
          onClick={() => {
            setMessage(!message);
          }}
        >
          Horní lišta
        </a>
        <a
          href
          className={`linkcurrency${cookieAlert ? " active" : ""}`}
          onClick={() => {
            setCookieAlert(!cookieAlert);
          }}
        >
          Spodní cookie lišta
        </a>
        <a
          href
          className={`linkcurrency${cookieAlert ? " active" : ""}`}
          onClick={() => {
            setRed(!red);
          }}
        >
          red
        </a>
      </div>
      <Header setMessage={setMessage} />
      <div className="container main">
        <Redirect to={`${process.env.PUBLIC_URL}/`} />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <HomepagePage />
          </Route>
          <Route path="/mysticshop/OrderDetail" exact>
            <OrderDetail />
          </Route>
          <Route path="/mysticshop/ContactForm" exact>
            <ContactForm />
          </Route>
          <Route path="/mysticshop/Cart1" exact>
            <Cart1 />
          </Route>
          <Route path="/mysticshop/Cart2" exact>
            <Cart2 />
          </Route>
          <Route path="/mysticshop/Cart3" exact>
            <Cart3 />
          </Route>
          <Route path="/mysticshop/ProduktDetail" exact>
            <ProduktDetailPage />
          </Route>
          <Route path="/mysticshop/RegistrationForm" exact>
            <RegistrationForm />
          </Route>
          <Route path="/mysticshop/OrderList" exact>
            <OrderList />
          </Route>
          <Route path="/mysticshop/Contact" exact>
            <Contact />
          </Route>
          <Route path="/mysticshop/BussinessConditions" exact>
            <BussinessConditions />
          </Route>
          <Route path="/mysticshop/MyAccount" exact>
            <MyAccount />
          </Route>
          <Route path="/mysticshop/BuyCards" exact>
            <BuyCards />
          </Route>
          <Route path="/mysticshop/SellCards" exact>
            <SellCards />
          </Route>
          <Route path="/mysticshop/Products" exact>
            <Products />
          </Route>
          <Route path="/mysticshop/Accessories" exact>
            <Accessories />
          </Route>
          <Route path="/mysticshop/LoyaltyProgram" exact>
            <LoyaltyProgram />
          </Route>
          <Route path="/mysticshop/ShipmentPayment" exact>
            <ShipmentPayment />
          </Route>
          <Route path="/mysticshop/SellCardsHow" exact>
            <SellCardsHow />
          </Route>
          <Route path="/mysticshop/GDPR" exact>
            <GDPR />
          </Route>
          <Route path="/mysticshop/News" exact>
            <NewsPage />
          </Route>
          <Route path="/mysticshop/LogIn" exact>
            <LogIn />
          </Route>
          <Route path="/mysticshop/ResetPassword" exact>
            <ResetPassword />
          </Route>
          <Route path="/mysticshop/KartaDetail" exact>
            <KartaDetailPage />
          </Route>
          <Route path="/mysticshop/StavKartyPage" exact>
            <StavKartyPage />
          </Route>
          <Route path="/mysticshop/Aktualita" exact>
            <Aktualita />
          </Route>
        </Switch>
      </div>
      <Footer />
      {cookieAlert && <CookieAlert setCookieAlert={setCookieAlert} />}
    </div>
  );
}
