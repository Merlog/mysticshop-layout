import Karta from "./../assets/images/karta.jpg";
import Zendikar from "./../assets/images/zendikar.jpg";
import { useState } from "react";
import './KartaDetail.css'

export default function KartaDetail() {
  const [language, setLanguage] = useState(false);
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
              Stoneforge Mystic
              <img
                src={Zendikar}
                className="symbol"
                alt="recommended"
              /></h2>
            <p className="productCode">Kód Karty: 230589</p>
            <a
              href
              className={`linkcurrency${language ? " active" : ""}`}
              onClick={() => {
                setLanguage(!language);
              }}
            >
              cz
            </a>
            {!language && (
              <div className="text cz">
                <p>

                  Flying, double strike
              <br />    <br />


              Kdykoli bytost pod tvou kontrolou udělí bojové zranění hráči, ty a onen hráč si přidáte odpovídající množství životů.

              <br />    <br />

              Na začátku tvé fáze konce kola, pokud máš aspoň o 15 životů více než na počátku hry, každý hráč, na kterého Angel of Destiny toto kolo zaútočila, prohrává hru.
              <br />    <br />
                </p>

                <p className="italic">
                  "Archoni vykonávají spravedlnost na základě prastarých, ale nedokonalých pravidel."
                  —Nissa Revane
              </p>
              </div>
            )}
            {language && (
              <div className="text en">

                Flying, double strike
                <br />    <br />
Whenever a creature you control deals combat damage to a player, you and that player each gain that much life.
                <br />    <br />
At the beginning of your end step, if you have at least 15 life more than your starting life total, each player Angel of Destiny attacked this turn loses the game.
              </div>
            )}
            <div className="cardPrice">199 Kč</div>
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
                Koupit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
