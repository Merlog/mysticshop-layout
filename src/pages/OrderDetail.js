export default function OrderDetail() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">

          <div class="row">
            <div class="col-2 py-4">
              <a href="#" class="align-baseline"> Zpět </a>
              </div> 
              <div class="col-8 text-center py-4">
              <h4>Objednávka č. 111111</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-4 my-4">
              <div class="border border-dark p-2 pl-4">
                <div>Datum: 1. 1. 2020</div>
                <div>Stav: zaplacená</div>
                <div>Sledování: <a href="#">odkaz na sledování</a></div>
              </div>
            </div>
            <div class="col-4 offset-4 my-4">
              <div class="border border-dark p-2 pl-4">
                <div><h6 class="mb-3">Fakturační údaje:</h6></div>
                <div><p>Jméno a příjmení</p></div>
                <div><p>Ulice a č. p.</p></div>
                <div><p>PSČ a obec</p></div>
                <div><p>Stát</p></div>
              </div>
            </div>
          </div>

        <div class="row">
          <div class="col-12">
            <h6 class="my-2 font-weight-bold">Zboží z katalogu</h6>
            <table class="table table-sm">
              <thead class="thead-dark">
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

        <div class="row">
          <div class="col-12">
            <h6 class="my-2 font-weight-bold">Kusovky</h6>
            <table class="table table-sm">
              <thead class="thead-dark">
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

        <div class="row">
          <div class="col-12">
            <h6 class="my-2 font-weight-bold">Souhrn</h6>
            <table class="table">
              <thead class="thead-dark">
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
                  <td class="font-weight-bold">5 023 Kč</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
