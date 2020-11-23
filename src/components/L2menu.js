import "./L2menu.css";

export default function L2menu() {
  return (
    <nav className="nav flex-column navEdice">
      <a className="nav-link" href="#">Alba</a>
      <a className="nav-link" href="#">Bazar</a>
      <a className="nav-link" href="#">Boxy na karty</a>
      <a className="nav-link" href="#">Herní podložky</a>
      <a className="nav-link" href="#">Knížky</a>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Kostky</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <a className="nav-link" href="#">Krabičky</a>
      <a className="nav-link" href="#">Magic:The Gathering</a>
      <a className="nav-link" href="#">Obaly na karty</a>
      <a className="nav-link" href="#">Ostatní doplňky</a>
    </nav>

  );
}
