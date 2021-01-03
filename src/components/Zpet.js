import { NavLink } from "react-router-dom";
import './Zpet.css';

export default function Zpet(props) {
  return (
    <div className="row zpetNavigace">
      <div className="col-12">
        <NavLink to={`/mysticshop/${props.to}`}>
          <button type="button" className="btn card-btn zpetButton">
            Zpět
          </button>
        </NavLink>
      </div>
    </div>
  );
}
