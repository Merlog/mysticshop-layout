import { NavLink } from 'react-router-dom';
import './CartButton.css';

export default function CartButton(props) {
  return (
    <div className="row cart-navigace">
      <div className="col-12">
        <NavLink to={`/mysticshop/${props.to}`}>
          <button
            type="button"
            className={`btn card-btn cart-button cart-button-${props.size}`}
          >
            {props.text}
          </button>
        </NavLink>
      </div>
    </div>
  );
}
