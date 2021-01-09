import Carousel from "./../components/Carousel";
import ProductsSection from "./../components/ProductsSection";
import Aktuality from "../components/Aktuality";

export default function HomepagePage() {
  return (
    <>
      <div className="row">
        <div className="col col-lg-7">
          <Carousel />
        </div>
        <div className="col col-lg-5">
          <Aktuality />
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <ProductsSection title="Nejnovější produkty" />
          <ProductsSection title="Doporučené produkty" />
        </div>
      </div>
    </>
  );
}
