import { NavLink } from "react-router-dom";

export default function Zpet(props) {
  return (
    <div className="row navigace">
      <div className="col-12">
        <NavLink to={`/mysticshop/${props.to}`}>
          <button type="button" className="btn card-btn cardButton">
            Zpět
          </button>
        </NavLink>
      </div>
    </div>
  );
}
