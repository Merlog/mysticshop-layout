import "./Footer.css";
import Facebook from "../assets/facebook.svg";
import CreditCard from "../assets/creditCard.svg";

export default function Footer() {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-4 text">
          <ul className="list">
            <li className="item">Kontaktujte nás</li>
            <li className="item">Obchodní podmínky</li>
          </ul>
        </div>
        <div className="col-4">
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className="col-4">
          <img src={CreditCard} alt="Credit Card" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text text-center">Copyright</div>
      </div>
    </div>
  );
}
