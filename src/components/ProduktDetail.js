import BoosterBox from "./../assets/images/product-img/booster_pack.jpg";
import Booster from "./../assets/images/product-img/booster.jpg";
import Duel from "./../assets/images/product-img/duel.jpg";
import Koupit from './Koupit';
import "./ProduktDetail.css";

export default function ProduktDetail() {
  return (
    <div className="row ">
      <div className="col-12">
        <div className="row productDetail">
          <div className="col-5 gallery">
            <div className="row mainImg">
              <img src={BoosterBox} className="imageMain" alt="recommended" />
            </div>
            <div className="row nahledy">
              <div className="col-4 nahled">
                <img src={Booster} className="imageMain" alt="recommended" />
              </div>
              <div className="col-4 nahled">
                <img src={Duel} className="imageMain" alt="recommended" />
              </div>
              <div className="col-4 nahled">
                <img src={BoosterBox} className="imageMain" alt="recommended" />
              </div>
            </div>
          </div>
          <div className="col-5 content">
            <h2>Core Set 2021 BoosterBox</h2>
            <p className="productCode">Kód produktu: 310589</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce
              dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nullam
              feugiat, turpis at pulvinar vulputate, erat libero tristique
              tellus, nec bibendum odio risus sit amet ante. Proin mattis
              lacinia justo. Phasellus faucibus molestie nisl. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos hymenaeos. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
              <br />
              <br /> Quisque tincidunt scelerisque libero. Pellentesque arcu.
              Aliquam erat volutpat. Fusce tellus odio, dapibus id fermentum
              quis, suscipit id erat. Duis bibendum, lectus ut viverra rhoncus,
              dolor nunc faucibus libero, eget facilisis enim ipsum id lacus.
              Nulla non lectus sed nisl molestie malesuada. Vestibulum fermentum
              tortor id mi. Nulla non arcu lacinia neque faucibus fringilla.
              Nulla turpis magna, cursus sit amet, suscipit a, interdum id,
              felis.
            </p>
          </div>
          <div className="col-2 buy">
            <div className="cardPrice">199 Kč</div>
            <div className="d-flex skladem">15ks skladem</div>
            <div className="d-flex koupit">
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
              <Koupit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
