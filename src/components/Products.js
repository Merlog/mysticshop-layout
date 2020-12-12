import "./Products.css";
import BoosterPack from "./../assets/images/product-img/booster_pack.jpg";
import Booster from "./../assets/images/product-img/booster.jpg";
import Duel from "./../assets/images/product-img/duel.jpg";

export default function Products() {
  return (
    <div className="row ">
      <div className="row productsBoxes">
        <div className="col-3 Box">
          <div className="card itemBox">
            <img src={Booster} className="card-img-top" alt="booster.jpg" />
            <div className="card-body">
              <h5 className="card-title">Core Set 2021 booster</h5>
              <h5 className="card-price">cena 99</h5>
              <div className="card-btn">
                <a href="/#" className="btn btn-primary btn-sm">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 Box">
          <div className="card itemBox">
            <img
              src={BoosterPack}
              className="card-img-top"
              alt="booster-pack.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Core Set 2021 booster box</h5>
              <h5 className="card-price">cena 2799</h5>
              <div className="card-btn">
                <a href="/#" className="btn btn-primary btn-sm">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 Box">
          <div className="card itemBox">
            <img src={Duel} className="card-img-top" alt="duel.jpg" />
            <div className="card-body">
              <h5 className="card-title">Duel Decks: Elves Vs. Inventors</h5>
              <h5 className="card-price">cena 449</h5>
              <div className="card-btn">
                <a href="/#" className="btn btn-primary btn-sm">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 Box">
          <div className="card itemBox">
            <img src={Duel} className="card-img-top" alt="duel.jpg" />
            <div className="card-body">
              <h5 className="card-title">Duel Decks: Elves Vs. Inventors</h5>
              <h5 className="card-price">cena 449</h5>
              <div className="card-btn">
                <a href="/#" className="btn btn-primary btn-sm">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col col-lg-12">
        <div className="row produktItem">
          <div className="col-2">
            <img src={Booster} className="card-img-top" alt="booster.jpg" />
          </div>
          <div className="col-7 produktItem__text">
            <h5 className="card-title">Core Set 2021 booster</h5>
            <p className="card-text">
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z
              nich může být foilová. Navíc je zde token nebo karta rad & triků.
            </p>
          </div>
          <div className="col-3  produktItem__cena">
            <h6>cena 99</h6>
            <a href="/#" className="btn btn-primary">
              Koupit
            </a>
          </div>
        </div>

        <div className="row produktItem">
          <div className="col-2">
            <img src={Booster} className="card-img-top" alt="booster.jpg" />
          </div>
          <div className="col-7 produktItem__text">
            <h5 className="card-title">Core Set 2021 booster</h5>
            <p className="card-text">
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z
              nich může být foilová. Navíc je zde token nebo karta rad & triků.
            </p>
          </div>
          <div className="col-3  produktItem__cena">
            <h6>cena 99</h6>
            <a href="/#" className="btn btn-primary">
              Koupit
            </a>
          </div>
        </div>

        <div className="row produktItem">
          <div className="col-2">
            <img src={Booster} className="card-img-top" alt="booster.jpg" />
          </div>
          <div className="col-7 produktItem__text">
            <h5 className="card-title">Core Set 2021 booster</h5>
            <p className="card-text">
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z
              nich může být foilová. Navíc je zde token nebo karta rad & triků.
            </p>
          </div>
          <div className="col-3  produktItem__cena">
            <h6>cena 99</h6>
            <a href="/#" className="btn btn-primary">
              Koupit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
