import "./L3menu.css";

export default function L3menuCards() {
  const items = [];
  for (let i = 0; i < 40; i++) {
    items.push(
      <li className="L3items d-flex">
        <div className="L3img d-flex justify-content-center align-items-center">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-tree-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0z"
            />
            <path d="M7 13h2v3H7v-3z" />
          </svg>
        </div>
        <p className="L3name d-flex align-items-center px-1">
          Ikoria: Lair of Behemoths
        </p>
      </li>
    );
  }

  return (
    <div className="L3wrapper">
      <h5 className="L3headline">Magic: TG Kusovky</h5>
      <div className="L3filters d-flex flex-column">
        <span className="L3filtersTitle">Seřadit:</span>
        <div className="d-flex justify-content-between my-2">
          <button className="L3filtersButton">Abecedně</button>
          <button className="L3filtersButton">Nejnovější</button>
        </div>
      </div>
      <ul className="nav nav-tabs L3list">{items}</ul>
    </div>
  );
}
