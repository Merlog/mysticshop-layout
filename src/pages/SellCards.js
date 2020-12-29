import L3menuCards from "../components/L3menuCards";
import ProductSearch from "../components/ProductSearch";
import ResultsCards from "../components/ResultsCards";

export default function BuyCards() {
  return (
    <div className="row">
      <div className="col-2">
        <L3menuCards />
      </div>
      <div className="col-10">
        {/* <h5 className="L3headline">Prodej karet</h5> */}
        <ProductSearch sellCards />
        <ResultsCards sellCards />
      </div>
    </div>
  );
}
