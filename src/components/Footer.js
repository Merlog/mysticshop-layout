import { NavLink } from "react-router-dom";
import "./Footer.css";
import Facebook from "../assets/svg/social/facebook.svg";
import Twitter from "../assets/svg/social/twitter.svg";
import Instagram from "../assets/svg/social/instagram.svg";
import Pinterest from "../assets/svg/social/pinterest.svg";
import Maestro from "../assets/svg/payment/maestro.svg";
import Visa from "../assets/svg/payment/visa.svg";

export default function Footer() {
  return (
    <div className="wrapper py-3 px-5 w-100">
      <div className="row footer mb-3">
        <div className="col-4 social d-flex">
          <img
            src={Facebook}
            alt="Facebook"
            width="36px"
            height="36px"
            className="mx-2"
          />
          <img
            src={Twitter}
            alt="Twitter"
            width="36px"
            height="36px"
            className="mx-2"
          />
          <img
            src={Instagram}
            alt="Instagram"
            width="36px"
            height="36px"
            className="mx-2"
          />
          <img
            src={Pinterest}
            alt="Pinterest"
            width="36px"
            height="36px"
            className="mx-2"
          />
        </div>
        <div className="col-4 links d-flex">
          <NavLink to="/Contact" exact>
            <a className="text" href="/#">
              Kontaktujte nás
            </a>
          </NavLink>
          <NavLink to="/BussinessConditions" exact>
            <a className="text" href="/#">
              Obchodní podmínky
            </a>
          </NavLink>
        </div>
        <div className="col-4 payment d-flex">
          <img
            src={Maestro}
            alt="Maestro"
            width="36px"
            height="36px"
            className="mx-2"
          />
          <img
            src={Visa}
            alt="Visa"
            width="36px"
            height="36px"
            className="mx-2"
          />
        </div>
      </div>
      <div className="row copyright d-flex">
        <div className="col-12 copyright text-center font-italic font-weight-lighter">
          2020 &copy; design Kateřina Faustenová &amp; Jakub Fides
        </div>
      </div>
    </div>
  );
}
