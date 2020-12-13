import "./Recommended.css";
import BoosterPack from "./../assets/images/product-img/booster_pack.jpg";
import Booster from "./../assets/images/product-img/booster.jpg";
import Duel from "./../assets/images/product-img/duel.jpg";
import Obal from "./../assets/images/product-img/obal.jpg";

export default function Recommended() {
  return (
    <div className="row recommended">
      <div className="col-12">
        <h2>Doporučené produkty</h2>

        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={Booster} className="card-img-top" alt="recommended" />
              <div className="card-body">
                <h5 className="card-title">Core Set 2021 booster</h5>
                <h5 className="card-price">99 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="#" className="btn btn-sm">
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
                  <a href="#" className="btn btn-sm">
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
                  <a href="#" className="btn btn-sm">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img src={Obal} className="card-img-top" alt="recommended" />
              <div className="card-body">
                <h5 className="card-title">Duel Decks: Elves Vs. Inventors</h5>
                <h5 className="card-price">449 Kč</h5>
                <div className="card-btn cardButton">
                  <a href="#" className="btn btn-sm">
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
