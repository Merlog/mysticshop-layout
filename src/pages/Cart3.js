export default function Cart3() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-4 order-md-1">
          <ul className="nav mb-5">
            <li className="nav-item">
              <a className="cartPageLink disabled" href="/#">
                <span className="cartPageNumber">1</span>
                <button type="button" className="btn disabled">
                  Košík
                </button>
              </a>
            </li>
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
            <li className="nav-item">
              <a className="cartPageLink disabled" href="/#">
                <span className="cartPageNumber">2</span>
                <button type="button" className="btn disabled">
                  Doprava a platba
                </button>
              </a>
            </li>
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
            <li className="nav-item">
              <a className="cartPageLink" href="/#">
                <span className="cartPageNumber">3</span>
                <button type="button" className="btn">
                  Souhrn
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-12 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Košík</span>
            <span className="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <img
                src="./assets/product-img/booster.jpg"
                class="cartProductImage"
                alt="product"
              />
              <h6 className="my-0 cartProductName">Název produktu</h6>
              <span className="cartProductPrice">100 Kč</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <img
                src="./assets/product-img/booster_pack.jpg"
                class="cartProductImage"
                alt="product"
              />
              <h6 className="my-0 cartProductName">Název dalšího produktu</h6>
              <span className="cartProductPrice">200 Kč</span>
            </li>
            <h4 className="my-3">Zvolený způsob dopravy</h4>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0 cartProductName">Zásilkova - ČR</h6>
              <span className="cartProductPrice">100 Kč</span>
            </li>
            <h4 className="my-3">Zvolený způsob platby</h4>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0 cartProductName">Kartou online</h6>
              <span className="cartProductPrice">0 Kč</span>
            </li>
          </ul>
          <div className="row justify-content-end">
            <div className="col-md-auto text-right">
              <h3 className="my-2">Celkem k úhradě</h3>
              <small className="text-muted">s DPH</small>
              <h3 className="font-weight-bold">280 Kč</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between my-4 order-md-3">
            <button type="button" className="btn btn-primary">
              Zpět na výběr dopravy a platby
            </button>
            <button type="button" className="btn btn-primary">
              Odeslat objednávku
            </button>
          </div>
          <p className="text-right font-italic">
            Po odeslání objednávky budete přesměrováni na platební bránu.
          </p>
        </div>
      </div>
    </div>
  );
}
