import "./SearchCustom.css";
import Search from "./../assets/svg/search-material.svg";
import Search2 from "./../assets/svg/search-material2.svg";
import { useState } from "react";
import SearchCustomItem from './SearchCustomItem';
import { SearchCustomData } from './SearchCustomData';

export default function SearchCustom() {
  const [message, setMessage] = useState(false);
  console.log(SearchCustomData)

  return (
    <div className="col-6 SearchCustom SearchCustomResults">
      <form className="form-inline my-2 searchWrapper">
        <input
          className="form-control w-100 search"
          type="search"
          placeholder="Vyhledat"
        ></input>
        <button className="btn searchButton" type="submit">
          <img src={Search} alt="search" className="dark"></img>
          <img src={Search2} alt="search" className="light"></img>
        </button>
      </form>
      <div className="col-6 SearchCustomContent">
        {SearchCustomData.map(item =>
          <SearchCustomItem
            name={item.name}
            img={item.img}
            price={item.price}
            edice={item.edice}
          >tralal</SearchCustomItem>
        )}
        
      </div>
    </div>
  );
}
