import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomepagePage from './pages/HomepagePage';
import { NavLink } from "react-router-dom";

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

export default function App() {
  return (
    <div>
      <div className="row temporary">
        <div><NavLink to="/Homepage" exact>
          Homepage
        </NavLink></div>
        <div><NavLink to="/OrderDetail" exact>
          Order Detail
        </NavLink></div>
        <div><NavLink to="/ContactForm" exact>
          Contact Form
        </NavLink></div>
        <div><NavLink to="/Cart1" exact>
          Cart1
        </NavLink></div>
        <div><NavLink to="/Cart2" exact>
          Cart2
        </NavLink></div>
        <div><NavLink to="/Cart3" exact>
          Cart3
        </NavLink></div>
        <div><NavLink to="/RegistrationForm" exact>
          Registration Form
        </NavLink></div>
        <div><NavLink to="/FullSearch" exact>
          Full Search
        </NavLink></div>
        <div><NavLink to="/OrderList" exact>
          Order List
        </NavLink></div>
        <div><NavLink to="/UserSettings" exact>
          User Settings
        </NavLink></div>
      </div>
      <Header />
      <Redirect to={`${process.env.PUBLIC_URL}/`} />
      <div class="container main">
        <Switch>
          <Route path="/" exact>
            <HomepagePage />
          </Route>
          <Route path="/OrderDetail">
            <OrderDetail />
          </Route>
          <Route path="/ContactForm">
            <ContactForm />
          </Route>
          <Route path="/Cart1">
            <Cart1 />
          </Route>
          <Route path="/Cart2">
            <Cart2 />
          </Route>
          <Route path="/Cart3">
            <Cart3 />
          </Route>
          <Route path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route path="/FullSearch">
            <FullSearch />
          </Route>
          <Route path="/OrderList">
            <OrderList />
          </Route>
          <Route path="/UserSettings">
            <UserSettings />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/BussinessConditions">
            <BussinessConditions />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
