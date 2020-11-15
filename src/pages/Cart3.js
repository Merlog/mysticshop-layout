export default function Cart3() {
  return (
    <div class="container" style={{ marginTop: "360px" }}>
      <div class="row">
        <div class="col-md-12 my-4 order-md-1">
          <ul class="nav mb-5">
            <li class="nav-item">
              <a class="cartPageLink disabled" href="#">
                <span class="cartPageNumber">1</span>
                <button type="button" class="btn disabled">
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
              <a class="cartPageLink disabled" href="#">
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
              <a class="cartPageLink" href="#">
                <span class="cartPageNumber">3</span>
                <button type="button" class="btn">
                  Souhrn
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Košík</span>
            <span class="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <img src="./assets/booster.jpg" class="cartProductImage" />
              <h6 class="my-0 cartProductName">Název produktu</h6>
              <span class="cartProductPrice">100 Kč</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <img src="./assets/booster_pack.jpg" class="cartProductImage" />
              <h6 class="my-0 cartProductName">Název dalšího produktu</h6>
              <span class="cartProductPrice">200 Kč</span>
            </li>
            <h4 class="my-3">Zvolený způsob dopravy</h4>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <h6 class="my-0 cartProductName">Zásilkova - ČR</h6>
              <span class="cartProductPrice">100 Kč</span>
            </li>
            <h4 class="my-3">Zvolený způsob platby</h4>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <h6 class="my-0 cartProductName">Kartou online</h6>
              <span class="cartProductPrice">0 Kč</span>
            </li>
          </ul>
          <div class="row justify-content-end">
            <div class="col-md-auto text-right">
              <h3 class="my-2">Celkem k úhradě</h3>
              <small class="text-muted">s DPH</small>
              <h3 class="font-weight-bold">280 Kč</h3>
            </div>
          </div>
          <div class="d-flex justify-content-between my-4 order-md-3">
            <button type="button" class="btn btn-primary">
              Zpět na výběr dopravy a platby
            </button>
            <button type="button" class="btn btn-primary">
              Odeslat objednávku
            </button>
          </div>
          <p class="text-right font-italic">
            Po odeslání objednávky budete přesměrováni na platební bránu.
          </p>
        </div>
      </div>
    </div>
  );
}
