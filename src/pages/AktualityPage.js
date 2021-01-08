import "./AktualityPage.css";
import Pagination from "../components/Pagination";
import { NavLink } from "react-router-dom";

export default function AktualityPage() {
  const newMsg = [];
  for (let i = 0; i < 8; i++) {
    newMsg.push(
      <div className="row aktualityPageWrapper my-4">
        <div className="col-12">
          <h4>Kompletní spoiler Avacyn Restored</h4>
          <h5 className="mt-3 mb-0">A je to tu</h5>
          <p className="aktualityPageText">
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
    );
  }

  return (
    <div className="row aktualityPage">
      <div className="col-12">
        <div className="row aktualityPageTitle">
          <div className="col-12">
            <h2 className="mx-3">Aktuality</h2>
          </div>
        </div>
        {newMsg}
        <Pagination />
      </div>
    </div>
  );
}
