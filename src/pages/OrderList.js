import "./OrderList.css";

export default function OrderList() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2">
          <div class="row">
            <div class="col-2 py-4">
              <a
                href="/#"
                class="btn btn-outline-success btn-sm align-baseline"
              >
                Zpět
              </a>
            </div>
            <div class="col-8 text-center py-4">
              <h4>Přehled objednávek</h4>
            </div>
          </div>
          <div class="row">
            <div class="col mb-5">
              <table class="table table-hover table-sm">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Číslo objednávky</th>
                    <th scope="col" class="text-center">
                      Datum
                    </th>
                    <th scope="col" class="text-center">
                      Stav
                    </th>
                    <th scope="col" class="text-right">
                      Celkem
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <a href="/OrderDetail" class="link">
                        1111
                      </a>
                    </th>
                    <td class="text-center">1. 1. 2020</td>
                    <td class="text-center">zaplacená</td>
                    <td class="text-right">1 248 Kč</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="/OrderDetail" class="link">
                        2222
                      </a>
                    </th>
                    <td class="text-center">1. 5. 2020</td>
                    <td class="text-center">zaplacená</td>
                    <td class="text-right">348 Kč</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="/OrderDetail" class="link">
                        3333
                      </a>
                    </th>
                    <td class="text-center">10. 9. 2020</td>
                    <td class="text-center">zaplacená</td>
                    <td class="text-right">1 548 Kč</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="/OrderDetail" class="link">
                        3333
                      </a>
                    </th>
                    <td class="text-center">10. 9. 2020</td>
                    <td class="text-center">zaplacená</td>
                    <td class="text-right">1 548 Kč</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <a href="/OrderDetail" class="link">
                        3333
                      </a>
                    </th>

                    <td class="text-center">10. 9. 2020</td>
                    <td class="text-center">čeká na platbu</td>
                    <td class="text-right">1 548 Kč</td>
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
