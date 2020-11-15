export default function OrderList() {
  return (
    <div class="container" style={{ marginTop: "360px" }}>
      <div class="row">
        <h5 class="text-center">Seznam objednávek</h5>
        <div class="col-12">
          <table class="table table-hover table-sm">
            <thead class="thead-light">
              <tr>
                <th scope="col">Číslo obj.</th>
                <th scope="col">Datum</th>
                <th scope="col">Stav</th>
                <th scope="col">Celkem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1111</th>
                <td>1. 1. 2020</td>
                <td>zaplacená</td>
                <td>1 248 Kč</td>
              </tr>
              <tr>
                <th scope="row">2222</th>
                <td>1. 5. 2020</td>
                <td>zaplacená</td>
                <td>348 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td>10. 9. 2020</td>
                <td>zaplacená</td>
                <td>1 548 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td>10. 9. 2020</td>
                <td>zaplacená</td>
                <td>1 548 Kč</td>
              </tr>
              <tr>
                <th scope="row">3333</th>
                <td>10. 9. 2020</td>
                <td>zaplacená</td>
                <td>1 548 Kč</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
