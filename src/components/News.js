import "./Carousel.css";
import BoosterPack from './../assets/booster_pack.jpg';
import Booster from './../assets/booster.jpg';
import Duel from './../assets/duel.jpg';
import Obal from './../assets/obal.jpg';

export default function Carousel() {
  return (
    <div className="row News">
      <div className="col-12">
        <h2>Doporucene produkty</h2>
      </div>
      <div className="col-3 Box">
        <div className="card itemBox">
          <img src={Booster} className="card-img-top" alt="booster.jpg" />
          <div className="card-body">
            <h5 className="card-title">
              Core Set 2021 booster</h5>

            <h5 className="card-price">cena 99</h5>
            <div className="card-btn">
              <a href="/#" className="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 Box">
        <div className="card itemBox">
          <img src={BoosterPack} className="card-img-top" alt="booster-pack.jpg" />
          <div className="card-body">
            <h5 className="card-title">Core Set 2021 booster box</h5>

            <h5 className="card-price">cena 2799</h5>
            <div className="card-btn">
              <a href="/#" className="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 Box">
        <div className="card itemBox">
          <img src={Duel} className="card-img-top" alt="duel.jpg" />
          <div className="card-body">
            <h5 className="card-title">
              Duel Decks: Elves Vs. Inventors</h5>

            <h5 className="card-price">cena 449</h5>
            <div className="card-btn">
              <a href="/#" className="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 Box">
        <div className="card itemBox">
          <img src={Obal} className="card-img-top" alt="duel.jpg" />
          <div className="card-body">
            <h5 className="card-title">
              Duel Decks: Elves Vs. Inventors</h5>

            <h5 className="card-price">cena 449</h5>
            <div className="card-btn">
              <a href="/#" className="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
