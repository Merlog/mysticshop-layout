import Carousel from "./../components/Carousel";
import Products from "./../components/Products";
import News from "../components/News";

export default function HomepagePage() {
  return (
    <>
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
          <Products title="Nejnovější produkty" />
          <Products title="Doporučené produkty" />
        </div>
      </div>
    </>
  );
}
