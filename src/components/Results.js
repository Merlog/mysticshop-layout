import Booster from "./../assets/images/product-img/booster.jpg";
import Pagination from "./Pagination";
import { useState } from "react";
import cart from "./../assets/svg/cart-material.svg";
import { NavLink } from "react-router-dom";
import "./Results.css";

export default function Results(props) {
  const [listView, setListView] = useState(false);

  const cardsGrid = [];
  for (let i = 0; i < 16; i++) {
    cardsGrid.push(
      <div className="col-3 my-2">
        <div className="card cardModif">
          <NavLink to="/mysticshop/ProduktDetail" exact>
            <img
              src={Booster}
              className="card-img-top cardImg"
              alt="recommended"
            />
            <h5 className="card-title cardTitle">Core Set 2021 booster</h5>
            <p>
              Popis - Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quo, laborum numquam aliquam provident distinctio.
            </p>
            <p className="productCode">Kód produktu: 310589</p>
            <div className="col-12 d-flex justify-content-between cardBody">
              <div className="d-flex align-items-end">
                <div className="price">1 199 Kč</div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <div className="skladem">15ks skladem</div>
                <div className="d-flex">
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
            {/* <div className="card-body d-flex flex-column cardBody">
              <h5 className="card-title cardTitle">Core Set 2021 booster</h5>
              <p>
                Popis - Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Quo, laborum numquam aliquam provident distinctio.
              </p>
              <p>Kód produktu</p>
              <p className="cardTextList cardBuyList">15ks skladem</p>
              <div className="d-flex flex-column align-items-end">
                <h5 className="card-price">1 199 Kč</h5>
                <div className="d-flex">
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
                  <button
                    type="button"
                    className="btn card-btn cardButton"
                    onClick={(event) => {
                      alert("koupeno");
                      event.preventDefault();
                    }}
                  >
                    <img src={cart} alt="logo" width="20px" />
                  </button>
                </div>
              </div>
            </div> */}
          </NavLink>
        </div>
      </div>
    );
  }

  const cardsList = [];
  for (let i = 0; i < 16; i++) {
    cardsList.push(
      <div className="col-12 my-2">
        <NavLink to="/mysticshop/ProduktDetail" exact>
          <div className="card cardModif">
            <div className="row">
              <div className="col-1 d-flex align-items-center">
                <img
                  src={Booster}
                  className="card-img-top cardImgList"
                  alt="recommended"
                />
              </div>
              <div className="col-6 d-flex flex-column justify-content-around">
                <h5 className="card-title cardTitleList">
                  Název - Core Set 2021 booster
                </h5>
                <h6>
                  Popis - Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Quo, laborum numquam aliquam provident distinctio.
                </h6>
              </div>
              <div className="col-3 d-flex flex-column justify-content-around align-items-end">
                <p className="small">Kód produktu: AT-20305</p>
                <h5 className="card-price">1199 Kč</h5>
              </div>
              <div className="col-2 d-flex flex-column justify-content-around align-items-end">
                <p className="cardTextList cardBuyList">
                  {props.sellCards ? `15ks poptáváno` : `15ks skladem`}
                </p>
                <div className="d-flex flex-column align-items-end cardBuyList">
                  <div className="d-flex">
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
                      {props.sellCards ? (
                        `Prodat`
                      ) : (
                        <img
                          src={cart}
                          alt="logo"
                          className="dark"
                          width="20px"
                        />
                      )}
                    </button>
                  </div>
                </div>
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
          <div className="row">{cardsList}</div>
        ) : (
          <div className="row">{cardsGrid}</div>
        )}
        <Pagination />
      </div>
    </div>
  );
}
