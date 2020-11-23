import "./Carousel.css";
import BoosterPack from './../assets/booster_pack.jpg';
import Booster from './../assets/booster.jpg';
import Duel from './../assets/duel.jpg';
import Obal from './../assets/obal.jpg';
import image1 from './../assets/1809.jpg';
import image2 from './../assets/1894.jpg';
import image3 from './../assets/1944.jpg';



export default function Carousel() {
  return (
    <div className="col col-lg-9">
      <div className="row ">
        <div className="col-12">
          <div id="carouselExampleCaptions" className="carousel slide CarouselHomepage" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="1809" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="1894" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="1894" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>





      </div>

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
                <a href="#" className="btn btn-primary btn-sm">Detail</a>
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
                <a href="#" className="btn btn-primary btn-sm">Detail</a>
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
                <a href="#" className="btn btn-primary btn-sm">Detail</a>
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
                <a href="#" className="btn btn-primary btn-sm">Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col col-lg-12 novinka">


        <div className="row ">
          <div className="col-3">
            <img src={Booster} className="card-img-top" alt="booster.jpg" />
          </div>
          <div className="col-7 produktItem__text">

            <h5 className="card-title">
              Core Set 2021 booster</h5>
            <p className="card-text">
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
              token nebo karta rad & triků.
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
              token nebo karta rad & triků.
              Booster obsahuje 15 náhodných karet ze sady Core Set 2021, jedna z nich může být foilová. Navíc je zde
              token nebo karta rad & triků.
        </p>
          </div>
          <div className="col-2  produktItem__cena">

            <a href="#" className="btn btn-primary">detail</a>
          </div>
        </div>
      </div>
    </div>

  );
}
