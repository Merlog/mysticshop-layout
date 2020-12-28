import { NavLink } from "react-router-dom";
import "./Footer.css";
import Facebook from "../assets/svg/social/facebook.svg";
// import Twitter from "../assets/svg/social/twitter.svg";
// import Instagram from "../assets/svg/social/instagram.svg";
// import Pinterest from "../assets/svg/social/pinterest.svg";
import mastercard from "../assets/images/payment/mastercard.jpg";
import mastercardSecurecode from "../assets/images/payment/mastercard-securecode.jpg";
import thepay from "../assets/images/payment/thepay.png";
import visa from "../assets/images/payment/visa.jpg";
import visaVerified from "../assets/images/payment/visa-verified.jpg";

export default function Footer() {
  return (
    <div className="wrapper py-3 px-5 w-100">
      <div className="container">
        <div className="row mb-4">
          <div className="col-3 d-flex flex-column">
            <NavLink to="/mysticshop/Contact" exact className="text">
              Kontakt
            </NavLink>
            <NavLink to="/mysticshop/ShipmentPayment" exact className="text">
              Doprava a platba
            </NavLink>
            <NavLink
              to="/mysticshop/BussinessConditions"
              exact
              className="text"
            >
              Obchodní podmínky
            </NavLink>
          </div>
          <div className="col-3 d-flex flex-column">
            <NavLink to="/mysticshop/LoyaltyProgram" exact className="text">
              Jak funguje věrnostní program
            </NavLink>
            <NavLink to="/mysticshop/SellCardsHow" exact className="text">
              Jak funguje výkup karet
            </NavLink>
            <NavLink to="/mysticshop/GDPR" exact className="text">
              Ochrana osobních údajů
            </NavLink>
          </div>
          <div className="col-6 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col-12 d-flex justify-content-end mt-1">
                <a href="https://www.facebook.com/MysticShop.cz" target="blank">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    width="36px"
                    height="36px"
                    className="mx-2"
                  />
                </a>
                {/* <img
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
                    /> */}
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-end payment">
                <img src={mastercard} alt="Master Card" width="50px" />
                <img
                  src={mastercardSecurecode}
                  alt="Master Card Secure Code"
                  width="50px"
                />
                <img src={thepay} alt="The Pay" width="50px" />
                <img src={visa} alt="Visa" width="50px" />
                <img src={visaVerified} alt="Visa Verified" width="50px" />
              </div>
            </div>
          </div>
        </div>

        <div className="row copyright d-flex">
          <div className="col-12 copyright text-center font-italic font-weight-lighter">
            2020 &copy; copyright
            {/* design Kateřina Faustenová &amp; Jakub Fides */}
          </div>
        </div>
      </div>
    </div>
  );
}
