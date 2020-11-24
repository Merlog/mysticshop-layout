export default function Cart1() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">
          <div class="row">
            <div class="col-12 py-4">
              <a
                class="bg-success text-white px-2 py-1 mr-2 rounded text-decoration-none"
                href="#"
              >
                <span class="mr-1">1. Košík</span>
              </a>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right cartPageArrow"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
              <a
                class="bg-success text-white px-2 py-1 mx-2 rounded text-decoration-none"
                href="#"
              >
                <span class="mr-1">2. Doprava a platba</span>
              </a>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right cartPageArrow"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
              <a
                class="bg-success text-white px-2 py-1 ml-2 rounded text-decoration-none"
                href="#"
              >
                <span class="mr-1">3. Souhrn</span>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-12 py-4">
              <span class="mr-2">Položek v košíku:</span>
              <span class="text-success font-weight-bold">2</span>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <table class="table table-sm">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Název položky</th>
                    <th scope="col">Počet ks</th>
                    <th scope="col">Cena</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="./assets/booster.jpg" />
                    </td>
                    <td>Booster</td>
                    <td>
                      <input type="number" min="1" class="w-25" />
                    </td>
                    <td>155 Kč</td>
                    <td>
                      {" "}
                      <button>
                        <svg
                          width="1.5em"
                          height="1.5em"
                          color="red"
                          viewBox="0 0 16 16"
                          class="bi bi-x"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="./assets/booster.jpg" />
                    </td>
                    <td>Karta xxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                    <td>
                      <input type="number" min="1" class="w-25" />
                    </td>
                    <td>355 Kč</td>
                    <td>
                      {" "}
                      <button>
                        <svg
                          width="1.5em"
                          height="1.5em"
                          color="red"
                          viewBox="0 0 16 16"
                          class="bi bi-x"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <table class="table table-striped table-dark table-sm">
                <tbody>
                  <tr>
                    <td>Cena bez DPH</td>
                    <td>4 444 Kč</td>
                  </tr>
                  <tr class="font-weight-bold">
                    <td>Cena s DPH</td>
                    <td>5 222 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <table class="table table-striped table-dark table-sm">
                <tbody>
                  <tr>
                    <td>Slevový kupón XXZZYYWW</td>
                    <td>- 82 Kč</td>
                  </tr>
                  <tr class="font-weight-bold">
                    <td>Cena po slevě vč. DPH</td>
                    <td>5 140 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                class="form-control"
                placeholder="Zadejte slevový kód"
              />
            </div>
            <div>
              <button type="submit" class="btn btn-secondary">
                Uplatnit
              </button>
            </div>
          </div>

          <div class="d-flex justify-content-between my-4">
            <button type="button" class="btn btn-success">
              Zpět k nakupování
            </button>
            <button type="button" class="btn btn-success">
              Pokračovat v objednávce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
