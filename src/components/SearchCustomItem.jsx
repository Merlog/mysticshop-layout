import "./SearchCustomItem.css";

export default function SearchCustomItem(props) {

  return (
    <div className="SearchCustomItem">
      <div className='Image'>
        <img src={props.img} alt={props.name} />
      </div>
      <div className='Name'>
        {props.name}
      </div>
      <div className='Edition'>
        <img src={props.edice} alt={props.edice} />
      </div>
      <div className='Price'>
        {props.price} kč
      </div>
    </div>
  );
}
