import L1menu from "./../components/L1menu";
import L2menu from "./../components/L2menu";
import L3menu from "./../components/L3menu";
import Carousel from "./../components/Carousel";
import Products from "./../components/Products";
import News from "./../components/News";
import New from "./../components/New";

export default function HomepagePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-3 ">
          <L1menu />
          <L2menu />
          <L3menu />
        </div>
        <div className="col col-lg-9">
          <Carousel />
          <New />
          <News />
          <Products />
        </div>
      </div>
    </div>
  );
}
