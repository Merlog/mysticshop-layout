import imgNew from "./../assets/images/new1.png";

export default function New() {
  return (
    <div className="col col-lg-12 novinka">
      <div className="row ">
        <div className="col-3">
          <img src={imgNew} className="card-img-top" alt="booster.jpg" />
        </div>
        <div className="col-7 produktItem__text">
          <h5 className="card-title">Kompletní spoiler Avacyn Restored</h5>
          <p className="card-text">
            <b>A je to zde!</b>
            <br /><br />
            <a href="/">Kompletní spoiler Avacyn Restored</a> včetně obrázků je na světě. Prohlédni si už nyní karty, které rozbalíš nejdříve o víkendu. <a href="/">Výhodné ceny pro předprodej produktů Avacyn Restored</a> platí již jen několik dní, proto si pospěš <b>a objednej ještě dnes!</b>
          </p>
        </div>
        <div className="col-2 more">
          <a href="/#">
            Více...
          </a>
        </div>
      </div>
    </div >
  );
}
