import cart from "./../assets/svg/cart-material.svg";
import "./Koupit.css";

export default function Koupit() {
  return (
    <div className="koupitWrapper">
      <div className="quantity position-relative">
        <input
          type="number"
          min="1"
          step="1"
          value="1"
          className="cardInput"
        />
        <div className="quantity-nav">
          <div className="quantity-button quantity-up">+</div>
          <div className="quantity-button quantity-down">-</div>
        </div>
      </div>
      <button
        type="button"
        className="btn card-btn koupitButton"
        onClick={(event) => {
          alert("koupeno");
          event.preventDefault();
        }}
      >
        <img src={cart} alt="koupit" width="20px" />
      </button>
    </div>
  );
}
