export default function OrderDetail() {
  return (
    <div className="container" style={{marginTop: "360px"}}>
      <div className="row">
        <div className="col-12">
          <a className="cartPageLink" href="#"> Zpět </a>
          <h4 className="my-3">Objednávka č. 111111</h4>
          <span className="border border-dark">
            <div>Datum: 1. 1. 2020</div>
            <div>Stav: zaplacená</div>
            <div>Sledování: odkaz xxxxxxxxxxx</div>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h6>Zboží z katalogu</h6>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th scope="col">Kód</th>
                <th scope="col">Název položky</th>
                <th scope="col">Počet ks</th>
                <th scope="col">Cena za ks</th>
                <th scope="col">Cena celkem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">12345</th>
                <td>Obal na karty</td>
                <td>2 ks</td>
                <td>55 Kč</td>
                <td>110 Kč</td>
              </tr>
            </tbody>
          </table>
          <h6>Kusovky</h6>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th scope="col">Kód</th>
                <th scope="col">Název položky</th>
                <th scope="col">Počet ks</th>
                <th scope="col">Cena za ks</th>
                <th scope="col">Cena celkem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">12345</th>
                <td>Karta xxxxxxx</td>
                <td>1 ks</td>
                <td>230 Kč</td>
                <td>230 Kč</td>
              </tr>
            </tbody>
          </table>
          <h5>Souhrn</h5>
          <table className="table table-sm">
            <tbody>
              <tr>
                <th scope="row">Doprava</th>
                <td>Zásilkova ČR</td>
              </tr>
              <tr>
                <th scope="row">Platba</th>
                <td>Kartou online</td>
              </tr>
              <tr>
                <th scope="row">Celkem bez DPH</th>
                <td>4 444 Kč</td>
              </tr>
              <tr>
                <th scope="row">Celkem s DPH</th>
                <td>5 023 Kč</td>
              </tr>
            </tbody>
          </table>

          {/* <ul className="list-group">
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <img src="./assets/booster.jpg" className="cartProductImage" />
              <h6 className="my-0 cartProductName">Název produktu</h6>
              <span>1 ks</span>
              <span className="cartProductPrice">100 Kč</span>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <img src="./assets/booster_pack.jpg" className="cartProductImage" />
              <h6 className="my-0 cartProductName">Název dalšího produktu</h6>
              <span>1 ks</span>
              <span className="cartProductPrice">200 Kč</span>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <h6 className="my-0 cartProductName">Zásilkova - ČR</h6>
              <span className="cartProductPrice">100 Kč</span>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <h6 className="my-0 cartProductName">Kartou online</h6>
              <span className="cartProductPrice">0 Kč</span>
            </li>
            <li
              className="list-group-item d-flex justify-content-between cartProductSum align-items-center"
            >
              <strong>Uhrazeno celkem</strong>
              <div className="d-flex flex-column">
                <strong>280 Kč</strong>
                <small className="text-muted">s DPH</small>
              </div>
            </li>
          </ul> */}

        </div>
        <div className="col-4">
          <ul className="list-group">
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <h6>Fakturační údaje:</h6>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <p>Jméno a příjmení</p>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <p>Ulice a č. p.</p>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <p>PSČ a obec</p>
            </li>
            <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <p>Stát</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
