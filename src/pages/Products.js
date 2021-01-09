import L3menu from "../components/L3menu";
import ResultsProducts from "../components/ResultsProducts";

export default function Products() {
  return (
    <div className="row">
      <div className="col-2">
        <L3menu />
      </div>
      <div className="col-10">
        {/* <h5 className="L3headline">Prodej karet</h5> */}
        <ResultsProducts />
      </div>
    </div>
  );
}
