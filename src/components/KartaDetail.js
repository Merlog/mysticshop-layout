import Karta from "./../assets/images/karta.jpg";
import Zendikar from "./../assets/images/zendikar.jpg";
import './KartaDetail.css'

export default function KartaDetail() {
  return (
    <div className="row ">
      <div className="col-12">
        <div className="row productDetail">
          <div className="col-4 gallery">
            <div className="row mainImg">
              <img
                src={Karta}
                className="imageKarta"
                alt="recommended"
              />
            </div>
          </div>
          <div className="col-8 content">
            <h2>
              <img
                src={Zendikar}
                className="symbol"
                alt="recommended"
              />
              Stoneforge Mystic</h2>
            <p className="productCode">Kód Karty: 230589</p>

            <p className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Proin mattis lacinia justo. Phasellus faucibus molestie nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br /><br /> Quisque tincidunt scelerisque libero. Pellentesque arcu. Aliquam erat volutpat. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla non lectus sed nisl molestie malesuada. Vestibulum fermentum tortor id mi. Nulla non arcu lacinia neque faucibus fringilla. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis.
              </p>

            <div className="d-flex skladem">
              15ks skladem
          </div>
            <div className="d-flex koupit">
              <input
                type="number"
                value="1"
                placeholder="ks"
                className="cardInput"
              />
              <button
                type="button"
                className="btn card-btn cardButton"
                onClick={(event) => {
                  alert("koupeno");
                  event.preventDefault();
                }}
              >
                dukwhkuda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
