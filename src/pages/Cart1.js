export default function Cart1() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 order-md-12 my-4">
          <ul class="nav mb-5">
            <li class="nav-item">
              <a class="cartPageLink" href="#">
                <span class="cartPageNumber">1</span>
                <button type="button" class="btn">
                  Košík
                </button>
              </a>
            </li>
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
            <li class="nav-item">
              <a class="disabled cartPageLink" href="#">
                <span class="cartPageNumber">2</span>
                <button type="button" class="btn disabled">
                  Doprava a platba
                </button>
              </a>
            </li>
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
            <li class="nav-item">
              <a class="disabled cartPageLink" href="#">
                <span class="cartPageNumber">3</span>
                <button type="button" class="btn disabled">
                  Souhrn
                </button>
              </a>
            </li>
          </ul>
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Košík</span>
            <span class="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex align-items-center justify-content-between lh-condensed">
              <img src="./assets/booster.jpg" class="cartProductImage" />
              <h6 class="my-0 cartProductName">Název produktu</h6>
              <input type="number" class="cartProductNumber" min="1" />
              <span class="cartProductPrice">100 Kč</span>
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
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-between lh-condensed">
              <img src="./assets/booster_pack.jpg" class="cartProductImage" />
              <div>
                <h6 class="my-0 cartProductName">Název dalšího produktu</h6>
              </div>
              <input type="number" class="cartProductNumber" min="1" />
              <span class="cartProductPrice">200 Kč</span>
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
            </li>
            <li class="list-group-item d-flex justify-content-between cartProductSum align-items-center">
              <strong>Celkem</strong>
              <div class="d-flex flex-column">
                <small class="text-muted">s DPH</small>
                <strong>280 Kč</strong>
              </div>
            </li>
          </ul>
          <div class="d-flex justify-content-between my-4">
            <button type="button" class="btn btn-primary">
              Zpět k nakupování
            </button>
            <button type="button" class="btn btn-primary">
              Pokračovat v objednávce
            </button>
          </div>
        </div>
        {/* <li class="list-group-item d-flex justify-content-between bg-light align-items-center">
                                <div class="text-success ">
                                  <h6 class="my-0">Slevový kupón</h6>
                                  <small>11XXYY</small>
                                </div>
                                <span class="text-success">- 20 Kč</span>
                              </li> 

        <li class="list-group-item d-flex justify-content-between cartProductSum noDPH align-items-center text-muted">
                                <strong>Celkem</strong>
                                <div class="d-flex flex-column">
                                  <small>bez DPH</small>
                                  <strong>228 Kč</strong>
                                </div>
                              </li>
        <form class="card p-2 col-md-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Zadejte slevový kupón"
                />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">Uplatnit</button>
                </div>
              </div>
            </form> */}
      </div>
    </div>
  );
}
