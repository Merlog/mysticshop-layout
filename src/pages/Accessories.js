import ProductsMenu from "../components/ProductsMenu";
import ResultsProducts from "../components/ResultsProducts";

export default function Accessories() {
  return (
    <div className="row">
      <div className="col-2">
        <ProductsMenu />
      </div>
      <div className="col-10">
        <ResultsProducts />
      </div>
    </div>
  );
}
