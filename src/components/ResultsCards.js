import Booster from "./../assets/images/product-img/booster.jpg";
import Mana from "./../assets/svg/mana-placeholder-material.svg";
import Zendikar from "./../assets/images/zendikar.jpg";
import Pagination from "./Pagination";
import { useState } from "react";
import cart from "./../assets/svg/cart-material.svg";
import cart2 from "./../assets/svg/cart-material2.svg";
import "./Results.css";

export default function ResultsCard(props) {
  const [listView, setListView] = useState(false);

  const cardsGrid = [];
  for (let i = 0; i < 16; i++) {
    cardsGrid.push(
      <div className="col-3 my-2">
        <a href="#">
          <div className="card cardModif">
            <div className="row">
              <div className="col-8">
                <img
                  src={Booster}
                  className="card-img-top cardImg"
                  alt="recommended"
                />
              </div>
              <div className="col-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z" />
                  </svg>
                </div>
                <p>
                  <span>Set/</span>
                  <span>R</span>
                </p>
              </div>
            </div>
            <div className="card-body d-flex flex-column cardBody">
              <h5 className="card-title cardTitle">Core Set 2021 booster</h5>
              <h6>Typ</h6>
              <p>Poznámka</p>
              <p>
                {props.sellCards
                  ? `Poptávaný počet ks`
                  : `Počet ks k dispozici`}
              </p>
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
        </a>
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
              <div className="col-4 d-flex flex-column justify-content-around">
                <h5 className="card-title cardTitleList">
                  Abbey Matron
                  <img
                    src={Zendikar}
                    className="mx-2"
                    alt="mana"
                    width="20px"
                  />
                </h5>
                <h6>Creature — Human Cleric (1/3)</h6>
              </div>
              <div className="col-3 d-flex flex-column justify-content-around">
                <div>
                  <img src={Mana} className="" alt="mana" width="20px" />
                  <img src={Mana} className="" alt="mana" width="20px" />
                  <img src={Mana} className="" alt="mana" width="20px" />
                </div>
                <p>NM, foil</p>
              </div>
              <div className="col-2 d-flex flex-column justify-content-end text-center">
                <h5 className="card-price">1199 Kč</h5>
              </div>
              <div className="col-2 d-flex flex-column justify-content-around">
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
        </a>
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
