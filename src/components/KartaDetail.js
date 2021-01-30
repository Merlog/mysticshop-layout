import { useState } from "react";
import { NavLink } from "react-router-dom";
import Karta from "./../assets/images/karta.jpg";
import Zendikar from "./../assets/images/zendikar.jpg";
import Stav from "./../assets/images/stav.png";
import Koupit from './Koupit';
import "./KartaDetail.css";
import ManaSymbol from "./../assets/images/symbols.png";
import { Circle } from "./../assets/svg/circle-material";

export default function KartaDetail() {
  const [language, setLanguage] = useState(false);
  return (
    <div className="row ">
      <div className="col-12">
        <div className="row kartaDetail">
          <div className="col-4 gallery">
            <div className="row mainImg">
              <img src={Karta} className="imageKarta" alt="recommended" />
            </div>
          </div>
          <div className="col-6 content">
            <div className="row">
              <div className="col-9">
                <h2 className="title">
                  Stoneforge Mystic
                  <img src={Zendikar} className="symbol" alt="recommended" />
                </h2>
                <h5 className="edice">Creature — Human Cleric (1/3)</h5>
                <div className="mana">
                  <img src={ManaSymbol} className="" alt="mana" />
                </div>
                <div className="stav">
                  <NavLink to="/mysticshop/StavKartyPage" exact>
                    <img src={Stav} className="" alt="stav" />
                  </NavLink>
                </div>
              </div>
              <div className="col-3">
                <div className="d-flex align-items-center legalitaWrapper illegal">
                  {Circle}
                  <a href className="pl-1">Standard</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Pioneer</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper illegal">
                  {Circle}
                  <a href className="pl-1">Modern</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper illegal">
                  {Circle}
                  <a href className="pl-1">Legacy</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper illegal">
                  {Circle}
                  <a href className="pl-1">Vintage</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Brawl</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Historic</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Pauper</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Penny</a>
                </div>
                <div className="d-flex align-items-center legalitaWrapper">
                  {Circle}
                  <a href className="pl-1">Commander</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-2">
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
              </div>
              </div>
              <div className="row cardText">
              <div className="col-12 py-2">
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
                <p>
                  Na začátku tvé fáze konce kola, pokud máš aspoň o 15 životů
                  více než na počátku hry, každý hráč, na kterého Angel of
                  Destiny toto kolo zaútočila, prohrává hru.
                </p>
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
            </div>
          </div>
          <div className="col-2 buy">
            <div className="price">1 199 Kč</div>
            <div className="skladem">15ks skladem</div>
            <Koupit big />
          </div>
        </div>
      </div>
    </div>
  );
}
