import "./Products.css";
import BoosterPack from "./../assets/images/product-img/booster_pack.jpg";
import Booster from "./../assets/images/product-img/booster.jpg";
import Duel from "./../assets/images/product-img/duel.jpg";

export default function Products() {
  return (
    <div className="row products">
      <div className="col-12">
        <h2>Nejnovější produkty</h2>

        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={Booster} className="card-img-top" alt="recommended" />
              <div className="card-body">
                <h5 className="card-title">Core Set 2021 booster</h5>
                <h5 className="card-price">99 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="/#" className="btn btn-sm">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                src={BoosterPack}
                className="card-img-top"
                alt="recommended"
              />
              <div className="card-body">
                <h5 className="card-title">Core Set 2021 booster box</h5>
                <h5 className="card-price">2 799 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="/#" className="btn btn-sm">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src={Duel} className="card-img-top" alt="recommended" />
              <div className="card-body">
                <h5 className="card-title">Duel Decks: Elves Vs. Inventors</h5>
                <h5 className="card-price">449 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="/#" className="btn btn-sm">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src={Duel} className="card-img-top" alt="recommended" />
              <div className="card-body">
                <h5 className="card-title">Duel Decks: Elves Vs. Inventors</h5>
                <h5 className="card-price">449 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="/#" className="btn btn-sm">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* PRODUKTY V SEZNAMOVÉM ZOBRAZENÍ */

/* <div className="col col-lg-12">
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
      </div> */
