import Karta from "./../assets/images/karta.jpg";
import Zendikar from "./../assets/images/zendikar.jpg";
import { useState } from "react";
import cart from "./../assets/svg/cart-material.svg";
import Koupit from './Koupit';
import "./KartaDetail.css";

export default function KartaDetail() {
  const [language, setLanguage] = useState(false);
  return (
    <div className="row ">
      <div className="col-12">
        <div className="row productDetail">
          <div className="col-4 gallery">
            <div className="row mainImg">
              <img src={Karta} className="imageKarta" alt="recommended" />
            </div>
          </div>
          <div className="col-6 content">
            <h2>
              Stoneforge Mystic
              <img src={Zendikar} className="symbol" alt="recommended" />
            </h2>
            <h6 className="edice">Creature — Human Cleric (1/3)</h6>
            <p className="productCode">Kód karty: 230589</p>
            {language ? (
              <a
                href
                className="language"
                onClick={() => {
                  setLanguage(!language);
                }}
              >
                CZ
              </a>
            ) : (
                <a
                  href
                  className="language"
                  onClick={() => {
                    setLanguage(!language);
                  }}
                >
                  EN
                </a>
              )}
            {!language && (
              <div className="text cz">
                <p>Flying, double strike</p>
                <p>
                  Kdykoli bytost pod tvou kontrolou udělí bojové zranění hráči,
                  ty a onen hráč si přidáte odpovídající množství životů.
                </p>
                <p>
                  Na začátku tvé fáze konce kola, pokud máš aspoň o 15 životů
                  více než na počátku hry, každý hráč, na kterého Angel of
                  Destiny toto kolo zaútočila, prohrává hru.
                </p>
                <p className="text italic">
                  "Archoni vykonávají spravedlnost na základě prastarých, ale
                  nedokonalých pravidel." — Nissa Revane
                </p>
                {/* <p>Flying, double strike</p>
                <p>
                  Kdykoli bytost pod tvou kontrolou udělí bojové zranění hráči,
                  ty a onen hráč si přidáte odpovídající množství životů.
                </p>
                <p>
                  Na začátku tvé fáze konce kola, pokud máš aspoň o 15 životů
                  více než na počátku hry, každý hráč, na kterého Angel of
                  Destiny toto kolo zaútočila, prohrává hru.
                </p>
                <p className="text italic">
                  "Archoni vykonávají spravedlnost na základě prastarých, ale
                  nedokonalých pravidel." — Nissa Revane
                </p> */}
              </div>
            )}
            {language && (
              <div className="text en">
                <p>Flying, double strike</p>
                <p>
                  Whenever a creature you control deals combat damage to a
                  player, you and that player each gain that much life.
                </p>
                <p>
                  At the beginning of your end step, if you have at least 15
                  life more than your starting life total, each player Angel of
                  Destiny attacked this turn loses the game.
                </p>
              </div>
            )}
          </div>
          <div className="col-2 buy">
            <div className="cardPrice">199 Kč</div>
            <div className="d-flex skladem">15ks skladem</div>
            <Koupit big />
          </div>
        </div>
      </div>
    </div>
  );
}
