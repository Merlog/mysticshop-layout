import Delete from "../assets/svg/delete.svg";
import ProductImage1 from "../assets/images/product-img/booster.jpg";
import ProductImage2 from "../assets/images/product-img/giftbox.jpg";
import "./Cart.css";

export default function Cart1() {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <div className="row">
          <div className="col-12 py-4">
            <a
              className="bg-success text-white px-2 py-1 mr-2 rounded text-decoration-none"
              href="#"
            >
              <span className="mr-1">1. Košík</span>
            </a>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right cartPageArrow"
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
              className="bg-success text-white px-2 py-1 mx-2 rounded text-decoration-none"
              href="#"
            >
              <span className="mr-1">2. Doprava a platba</span>
            </a>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right cartPageArrow"
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
              className="bg-success text-white px-2 py-1 ml-2 rounded text-decoration-none"
              href="#"
            >
              <span className="mr-1">3. Souhrn</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12 py-4">
            <span className="mr-2">Položek v košíku:</span>
            <span className="text-success font-weight-bold">2</span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table table-sm">
              <thead className="thead-dark">
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
                    <img
                      src={ProductImage1}
                      alt="product"
                      width="30px"
                      height="30px"
                    />
                  </td>
                  <td>Booster</td>
                  <td>
                    <input type="number" min="1" className="w-25" />
                  </td>
                  <td>155 Kč</td>
                  <td>
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={ProductImage2}
                      alt="product"
                      width="30px"
                      height="30px"
                    />
                  </td>
                  <td>Karta xxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                  <td>
                    <input type="number" min="1" className="w-25" />
                  </td>
                  <td>355 Kč</td>
                  <td>
                    <button>
                      <img src={Delete} alt="delete"></img>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="summary_wrapper">
          <div class="summary_inner">
            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Cena bez DPH</div>
                <div>4 444 Kč</div>
              </div>
            </div>

            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Cena s DPH</div>
                <div>5 222 Kč</div>
              </div>
            </div>
          </div>
          <div class="summary_inner">
            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Slevový kupón XXZZYYWW</div>
                <div>- 82 Kč</div>
              </div>
            </div>

            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Cena po slevě vč. DPH</div>
                <div class="price">5 140 Kč</div>
              </div>
            </div>
          </div>

          <div class="summary_inner">
            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Výše kreditu použitého k úhradě</div>
                <div>122 Kč</div>
              </div>
            </div>

            <div class="row summary">
              <div class="col-12 d-flex justify-content-between">
                <div>Zbývá k zaplacení</div>
                <div class="price">5 018 Kč</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Zadejte slevový kód"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">
              Uplatnit slevu
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              placeholder="Zadejte počet kreditů"
              min="1"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">
              Použít kredity
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between my-4">
          <button type="button" className="btn btn-success">
            Zpět k nakupování
          </button>
          <button type="button" className="btn btn-success">
            Pokračovat v objednávce
          </button>
        </div>
      </div>
    </div>
  );
}
