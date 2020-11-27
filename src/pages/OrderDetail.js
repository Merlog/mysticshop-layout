export default function OrderDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-2 py-4">
              <a
                href="/#"
                className="btn btn-outline-success btn-sm align-baseline"
              >
                Zpět
              </a>
            </div>
            <div className="col-8 text-center py-4">
              <h4>Objednávka č. 111111</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-4 my-4">
              <div className="border border-dark p-2 pl-4">
                <div>Datum: 1. 1. 2020</div>
                <div>Stav: zaplacená</div>
                {true && (
                  <div>
                    Sledování: <a href="/#">odkaz na sledování</a>
                  </div>
                )}
              </div>
            </div>
            <div className="col-4 offset-4 my-4">
              <div className="border border-dark p-2 pl-4">
                <div>
                  <h6 className="mb-3">Fakturační údaje:</h6>
                </div>
                <div>
                  <p>Jméno a příjmení</p>
                </div>
                <div>
                  <p>Ulice a č. p.</p>
                </div>
                <div>
                  <p>PSČ a obec</p>
                </div>
                <div>
                  <p>Stát</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h6 className="my-2 font-weight-bold">Zboží z katalogu</h6>
              <table className="table table-sm">
                <thead className="thead-dark">
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
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h6 className="my-2 font-weight-bold">Kusovky</h6>
              <table className="table table-sm">
                <thead className="thead-dark">
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
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h6 className="my-2 font-weight-bold">Souhrn</h6>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Doprava</th>
                    <th scope="col">Platba</th>
                    <th scope="col">Celkem bez DPH</th>
                    <th scope="col">Celkem s DPH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Zásilkova ČR</td>
                    <td>Kartou online</td>
                    <td>4 444 Kč</td>
                    <td className="font-weight-bold">5 023 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
