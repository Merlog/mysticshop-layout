export default function OrderList() {
  // chybí onclick na každý řádek (na danou položku), který otevře (route) na order detail s danou objednávkou
  return (
    <div class="container">
      <div class="row">
       <div class="col-12 mb-5">
          <h4 class="text-center">Přehled objednávek</h4>
        </div>
        <div class="col-8 offset-2 mb-5">
          <table class="table table-hover table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Číslo objednávky</th>
                <th scope="col" class="text-center">Datum</th>
                <th scope="col" class="text-center">Stav</th>
                <th scope="col" class="text-right">Celkem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1111</th>
                <td class="text-center">1. 1. 2020</td>
                <td class="text-center">zaplacená</td>
                <td class="text-right">1 248 Kč</td>
              </tr>
              <tr>
                <th scope="row">2222</th>
                <td class="text-center">1. 5. 2020</td>
                <td class="text-center">zaplacená</td>
                <td class="text-right">348 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td class="text-center">10. 9. 2020</td>
                <td class="text-center">zaplacená</td>
                <td class="text-right">1 548 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td class="text-center">10. 9. 2020</td>
                <td class="text-center">zaplacená</td>
                <td class="text-right">1 548 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td class="text-center">10. 9. 2020</td>
                <td class="text-center">čeká na platbu</td>
                <td class="text-right">1 548 Kč</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
