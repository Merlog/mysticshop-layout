import ProductsMenu from "../components/ProductsMenu";
import ResultsProducts from "../components/ResultsProducts";

export default function Products() {
  return (
    <div className="row">
      <div className="col-2">
        <ProductsMenu />
      </div>
      <div className="col-10">
        {/* <h5 className="L3headline">Prodej karet</h5> */}
        <ResultsProducts />
      </div>
    </div>
  );
}
