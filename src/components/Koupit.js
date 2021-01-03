import cart from "./../assets/svg/cart-material.svg";
import "./Koupit.css";

export default function Koupit() {
  return (
    <button
      type="button"
      className="btn card-btn cardButton"
      onClick={(event) => {
        alert("koupeno");
        event.preventDefault();
      }}
    >
      <img src={cart} alt="koupit" width="20px" />
    </button>
  );
}
