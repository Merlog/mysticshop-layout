import "./Products.css";
import Booster from "./../assets/images/product-img/booster.jpg";
import Koupit from './Koupit';

export default function Products(props) {
  const products = [];
  for (let i = 0; i < 6; i++) {
    products.push(
      <div className="col-2">
        <div className="card cardModif">
          <a href="#">
            <img
              src={Booster}
              className="card-img-top cardImg"
              alt="recommended"
            />
            <div className="card-body d-flex flex-column cardBody">
              <h5 className="card-title cardTitle mb-2">
                Core Set 2021 booster
              </h5>
              <div className="d-flex flex-column align-items-end">
                <h5 className="card-price mb-2">99 Kč</h5>
                <p>15ks skladem</p>
                <Koupit />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="row products">
      <div className="col-12">
        <div className="row title">
          <div className="col-11">
            <h2>{props.title ? props.title : "Produkty"}</h2>
          </div>
          <div className="col-1 d-flex align-items-start">
            <button className="control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button className="control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 0 24 24"
                width="30"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="row">{products}</div>
      </div>
    </div>
  );
}
