import Booster from "./../assets/images/product-img/booster.jpg";
import Pagination from "./Pagination";
import { useState } from "react";
import "./Results.css";

export default function Results(props) {
  const [listView, setListView] = useState(false);

  const cardsGrid = [];
  for (let i = 0; i < 16; i++) {
    cardsGrid.push(
      <div className="col-3 my-2">
        <div className="card cardModif">
          <a href="#">
            <img
              src={Booster}
              className="card-img-top cardImg"
              alt="recommended"
            />
            <div className="card-body d-flex flex-column cardBody">
              <h5 className="card-title cardTitle">Core Set 2021 booster</h5>
              <p>
                Popis - Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Quo, laborum numquam aliquam provident distinctio.
              </p>
              <p>Kód produktu</p>
              <p>
                {props.sellCards
                  ? `Poptávaný počet ks`
                  : `Počet ks k dispozici`}
              </p>
              <div className="d-flex flex-column align-items-end">
                <h5 className="card-price">99 Kč</h5>
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
                    {props.sellCards ? `Prodat` : `Koupit`}
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  const cardsList = [];
  for (let i = 0; i < 16; i++) {
    cardsList.push(
      <div className="col-12 my-2">
        <a href="#">
          <div className="card cardModif">
            <div className="row">
              <div className="col-1">
                <img
                  src={Booster}
                  className="card-img-top cardImgList"
                  alt="recommended"
                />
              </div>
              <div className="col-6 d-flex flex-column">
                <h5 className="card-title cardTitleList">
                  Název - Core Set 2021 booster
                </h5>
                <p>
                  Popis - Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Quo, laborum numquam aliquam provident distinctio.
                </p>
              </div>
              <div className="col-3 d-flex flex-column">
                <p>Kód produktu</p>
                <p>
                  {props.sellCards
                    ? `Poptávaný počet ks`
                    : `Počet ks k dispozici`}
                </p>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column align-items-end">
                  <h5 className="card-price">99 Kč</h5>
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
                      {props.sellCards ? `Prodat` : `Koupit`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="row products">
      <div className="col-12">
        <div className="row title">
          <div className="col-9">
            <h2>Produkty / Doplňky</h2>
          </div>
          <div className="col-2 d-flex">
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
          <div className="col-1">
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
