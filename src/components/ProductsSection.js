import "./ProductsSection.css";
import Booster from "./../assets/images/product-img/booster.jpg";
import Koupit from './Koupit';
import { NavLink } from "react-router-dom";

export default function ProductsSection(props) {
  const productsGrid = [];
  for (let i = 0; i < 5; i++) {
    productsGrid.push(
      <div className="productModifWrapper">
        <NavLink to="/mysticshop/ProduktDetail" exact>
          <div className="row productModif">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <img
                src={Booster}
                className="card-img-top productImg"
                alt="recommended"
              />
              </div>
              <div className="col-12 mt-4">
              <h5 className="card-title productTitle">Core Set 2021 booster</h5>
              </div>
              <div className="col-12">
              <p>
                Popis - Lorem ipsum dolor, sit amet consectetur adipisicing elit...
              </p>
              </div>
              <div className="col-12 d-flex justify-content-between productBody">
                <div className="d-flex align-items-end">
                  <div className="price">1 199 Kč</div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <div className="skladem">15ks skladem</div>
                  <Koupit />
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="row productsSection">
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
        <div className="row">{productsGrid}</div>
      </div>
    </div>
  );
}
