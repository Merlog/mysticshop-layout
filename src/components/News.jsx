import imgNews from "./../assets/images/news1.png";
import "./News.css";

export default function New() {
  return (
    <div className="row news">
      <div className="col-12">
        <h2>Aktuality</h2>
        <div className="row">
          <div className="col-3">
            <img src={imgNews} className="card-img-top" alt="news" />
          </div>
          <div className="col-8">
            <h4>Kompletní spoiler Avacyn Restored</h4>
            <h5>A je to zde!</h5>
            <p className="newsText">
              <a href="#">Kompletní spoiler Avacyn Restored </a>
              včetně obrázků je na světě. Prohlédni si už nyní karty, které
              rozbalíš nejdříve o víkendu.
              <a href="#">
                Výhodné ceny pro předprodej produktů Avacyn Restored{" "}
              </a>
              platí již jen několik dní, proto si pospěš
              <b> a objednej ještě dnes!</b>
            </p>
          </div>
          <div className="col-1 more">
            <a href="#">Více...</a>
          </div>
        </div>
      </div>
    </div>
  );
}
