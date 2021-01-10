import Booster from "./../assets/images/product-img/booster.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import Koupit from './Koupit';
import "./ResultsProducts.css";

export default function ResultsProducts(props) {
  const [listView, setListView] = useState(false);

  const productsGrid = [];
  for (let i = 0; i < 16; i++) {
    productsGrid.push(
      <div className="col-3 my-2">
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

  const productsList = [];
  for (let i = 0; i < 16; i++) {
    productsList.push(
      <div className="col-12 my-2">
        <NavLink to="/mysticshop/ProduktDetail" exact>
          <div className="card productModif productModifList p-2">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <img
                  src={Booster}
                  className="card-img-top productImgList"
                  alt="recommended"
                />
              </div>
              <div className="col-6 d-flex flex-column justify-content-around">
                <h5 className="card-title productTitle">Core Set 2021 booster</h5>
                <p>Popis - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ut commodi quasi autem. Velit consequuntur tempora adipisci modi, quibusdam non at impedit...</p>
              </div>
              <div className="col-2 d-flex flex-column justify-content-end align-items-end">
                <h5 className="price">1 199 Kč</h5>
              </div>
              <div className="col-2 d-flex flex-column justify-content-end align-items-end pb-2">
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
    <div className="row products">
      <div className="col-12">
        <div className="row title">
          <div className="col-8">
            <h2>Produkty / Doplňky</h2>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <label htmlFor="select">Seřadit:</label>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              id="select"
            >
              <option selected value="1">
                Od nejlevnějšího
              </option>
              <option value="2">Od nejdražšího</option>
              <option value="3">A-Z</option>
              <option value="4">Z-A</option>
            </select>
          </div>
          <div className="col-1 justify-content-center align-items-center">
            <button
              onClick={() => {
                setListView(!listView);
              }}
            >
              {listView ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
                </svg>
              ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
                  </svg>
                )}
            </button>
          </div>
        </div>
        {listView ? (
          <div className="row">{productsList}</div>
        ) : (
            <div className="row">{productsGrid}</div>
          )}
        <Pagination />
      </div>
    </div>
  );
}
