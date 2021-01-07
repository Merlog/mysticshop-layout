import { NavLink } from "react-router-dom";
import "./News.css";

export default function News() {
  return (
    <div className="row news">
      <div className="col-12">
        <div className="row newsTitle">
          <div className="col-12">
            <NavLink to="/mysticshop/News">
              <h2>Aktuality</h2>
            </NavLink>
          </div>
        </div>

        <div className="row newsWrapper">
          <div className="col-12">
            <h4>Kompletní spoiler Avacyn Restored</h4>
            <h5 className="mt-3 mb-0">A je to tu</h5>
          </div>
          <div className="col-12">
            <p className="newsText">
              <a href="#">Kompletní spoiler Avacyn Restored </a>
              včetně obrázků je na světě. Prohlédni si už nyní karty, které
              rozbalíš nejdříve o víkendu.{" "}
              <a href="#">
                {" "}
                Výhodné ceny pro předprodej produktů Avacyn Restored{" "}
              </a>
              platí již jen několik dní, proto si pospěš{" "}
              <b> a objednej ještě dnes!</b>
              
              <div className="newsNext d-flex justify-content-center">
                <NavLink to="/mysticshop/Aktualita">detail</NavLink>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
