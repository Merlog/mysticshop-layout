import Carousel from "./../components/Carousel";
import Products from "./../components/Products";
import Recommended from "../components/Recommended";
import News from "../components/News";

export default function HomepagePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-7">
          <Carousel />
        </div>
        <div className="col col-lg-5">
          <News />
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <Products />
          <Recommended />
        </div>
      </div>
    </div>
  );
}
