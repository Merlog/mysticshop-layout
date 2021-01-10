import { NavLink } from "react-router-dom";
import "./AktualitaHomepage.css";

export default function Aktuality() {
  return (
    <div className="row aktualitaHomepage">
      <div className="col-12">
            <NavLink to="/mysticshop/Aktuality">
        <div className="row aktualitaHomepageTitle">
          <div className="col-12 d-flex justify-content-start ">
              <h2>Aktuality</h2>
          </div>
        </div>
            </NavLink>
        <div className="row aktualitaHomepageWrapper">
          <div className="col-12">
            <h4 className="my-2">Kompletní spoiler Avacyn Restored</h4>
          </div>
          <div className="col-12">
            <p className="aktualitaHomepageText">
              <a href="#">Kompletní spoiler Avacyn Restored </a>
              včetně obrázků je na světě. Prohlédni si už nyní karty, které
              rozbalíš nejdříve o víkendu.{" "}
              <a href="#">
                {" "}
                Výhodné ceny pro předprodej produktů Avacyn Restored{" "}
              </a>
              platí již jen několik dní, proto si pospěš{" "}
              <b> a objednej ještě dnes!</b>
              <div className="aktualitaDetail d-flex justify-content-center">
                <NavLink to="/mysticshop/AktualitaDetailPage">Detail</NavLink>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
