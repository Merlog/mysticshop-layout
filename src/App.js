import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Cart1 from "./pages/Cart1";
import Cart2 from "./pages/Cart2";
import Cart3 from "./pages/Cart3";
import ContactForm from "./pages/ContactForm";
import FullSearch from "./pages/FullSearch";
import OrderDetail from "./pages/OrderDetail";
import OrderList from "./pages/OrderList";
import RegistrationForm from "./pages/RegistrationForm";
import UserSettings from "./pages/UserSettings";

export default function App() {
  return (
    <div>
      <Header />
      <Redirect to={`${process.env.PUBLIC_URL}/`} />
      <Switch>
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
      </Switch>
      <div class="container">
        <div class="row">
          <div class="col col-lg-3 ">
            tralala
            {/* <!-- LEVA NAVIGACE -->
    <iframe src="navLeftMTG.html"
      onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
    <iframe src="navLeftProdukty.html"
      onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
    <!-- <iframe src="navLeftEdice.html"
      onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe> --> */}
          </div>
          {/* <iframe src="CarouselModule.html"
    onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe> */}
        </div>
      </div>
    </div>
  );
}
