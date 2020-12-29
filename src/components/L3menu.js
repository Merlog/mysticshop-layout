import "./L3menu.css";

export default function L3menu() {
  const items = [];
  for (let i = 0; i < 10; i++) {
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
        <p className="L3name d-flex align-items-center px-1">Boxy na karty</p>
      </li>
    );
  }

  return (
    <div className="L3wrapper">
      <h5 className="L3headline">Produkty / Doplňky</h5>
      <ul className="nav nav-tabs L3list">{items}</ul>
    </div>
  );
}
