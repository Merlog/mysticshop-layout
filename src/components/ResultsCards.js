import Karta from "./../assets/images/karta.jpg";
import Mana from "./../assets/svg/mana-placeholder-material.svg";
import Zendikar from "./../assets/images/zendikar.jpg";
import Pagination from "./Pagination";
import { useState } from "react";
import cart from "./../assets/svg/cart-material.svg";
import { NavLink } from "react-router-dom";
import "./Results.css";

export default function ResultsCard(props) {
  const [listView, setListView] = useState(false);

  const cardsGrid = [];
  for (let i = 0; i < 16; i++) {
    cardsGrid.push(
      <div className="col-3 my-3 karta">
        <NavLink to="/mysticshop/KartaDetail" exact>
          <div className="row cardModif">
            <div className="col-12 position-relative">
              <img src={Karta} className="cardImgGrid" alt="recommended" />

              <div className="cardDescriptionGrid">
                <h5 className="card-title cardTitleList">
                  Abbey Matron
                  <img
                    src={Zendikar}
                    className="mx-2"
                    alt="mana"
                    width="20px"
                  />
                </h5>
                <h6 className="edice">Creature — Human Cleric (1/3)</h6>
                <div className="mana">
                  <img src={Mana} className="" alt="mana" width="18px" />
                  <img src={Mana} className="" alt="mana" width="18px" />
                  <img src={Mana} className="" alt="mana" width="18px" />
                </div>
                <div>
                  <span className="extra">NM</span>
                  <span className="extra">foil</span>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-between cardBody">
              <div className="d-flex align-items-end">
                <div className="price">1 199 Kč</div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <div className="skladem">
                  {props.sellCards ? `poptáváme 15ks` : `15ks skladem`}
                </div>
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
            </div>
          </div>
        </NavLink>
      </div>
    );
  }

  const cardsList = [];
  for (let i = 0; i < 16; i++) {
    cardsList.push(
      <div className="col-12 my-2">
        <NavLink to="/mysticshop/KartaDetail" exact>
          <div className="card cardModif cardModifList p-2">
            <div className="row">
              <div className="col-1 d-flex align-items-center">
                <img
                  src={Karta}
                  className="card-img-top cardImgList"
                  alt="recommended"
                />
              </div>
              <div className="col-5 d-flex flex-column justify-content-around">
                <h5 className="card-title cardTitleList">
                  Abbey Matron
                  <img
                    src={Zendikar}
                    className="mx-2"
                    alt="mana"
                    width="20px"
                  />
                </h5>
                <h6 className="edice">Creature — Human Cleric (1/3)</h6>
              </div>
              <div className="col-2 d-flex flex-column justify-content-around align-items-end">
                <div className="mana">
                  <img src={Mana} className="" alt="mana" width="18px" />
                  <img src={Mana} className="" alt="mana" width="18px" />
                  <img src={Mana} className="" alt="mana" width="18px" />
                </div>
                <div>
                  <span className="extra extraList">NM</span>
                  <span className="extra extraList">foil</span>
                </div>
              </div>
              <div className="col-2 d-flex flex-column justify-content-end align-items-end">
                <h5 className="price">1 199 Kč</h5>
              </div>
              <div className="col-2 d-flex flex-column justify-content-around align-items-end">
                <div className="skladem">
                  {props.sellCards ? `poptáváme 15ks` : `15ks skladem`}
                </div>
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
            <h2>Výsledek hledání / Karty</h2>
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
          <div className="col-1 d-flex justify-content-center align-items-center">
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
