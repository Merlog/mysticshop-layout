import "./NewsPage.css";
import Pagination from "./../components/Pagination";

export default function NewsPage() {
  const newMsg = [];
  for (let i = 0; i < 8; i++) {
    newMsg.push(
      <div className="row newsPageWrapper my-3">
        <div className="col-12">
          <h4>Kompletní spoiler Avacyn Restored</h4>
          <h5 className="mt-3 mb-0">A je to tu</h5>
          <p className="newsPageText">
            <a href="#">Kompletní spoiler Avacyn Restored </a>
            včetně obrázků je na světě. Prohlédni si už nyní karty, které
            rozbalíš nejdříve o víkendu.{" "}
            <a href="#">
              {" "}
              Výhodné ceny pro předprodej produktů Avacyn Restored{" "}
            </a>
            platí již jen několik dní, proto si pospěš{" "}
            <b> a objednej ještě dnes!</b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="row newsPage">
      <div className="col-12">
        <div className="row newsPageTitle">
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
