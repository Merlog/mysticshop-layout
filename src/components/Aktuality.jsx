import { NavLink } from "react-router-dom";
import "./Aktuality.css";

export default function Aktuality() {
  return (
    <div className="row aktuality">
      <div className="col-12">
        <div className="row aktualityTitle">
          <div className="col-12 d-flex justify-content-start">
            <NavLink to="/mysticshop/Aktuality">
              <h2>Aktuality</h2>
            </NavLink>
          </div>
        </div>

        <div className="row aktualityWrapper">
          <div className="col-12">
            <h4>Kompletní spoiler Avacyn Restored</h4>
            <h5 className="mt-3 mb-0">A je to tu</h5>
          </div>
          <div className="col-12">
            <p className="aktualityText">
              <a href="#">Kompletní spoiler Avacyn Restored </a>
              včetně obrázků je na světě. Prohlédni si už nyní karty, které
              rozbalíš nejdříve o víkendu.{" "}
              <a href="#">
                {" "}
                Výhodné ceny pro předprodej produktů Avacyn Restored{" "}
              </a>
              platí již jen několik dní, proto si pospěš{" "}
              <b> a objednej ještě dnes!</b>

              <div className="aktualityNext d-flex justify-content-center">
                <NavLink to="/mysticshop/Aktualita">detail</NavLink>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
