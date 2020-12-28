import L3menu from "./../components/L3menu";
import ProductSearch from "./../components/ProductSearch";
import Results from "./../components/Results";

export default function BuyCards() {
  return (
    <div className="row">
      <div className="col-3">
        <L3menu />
      </div>
      <div className="col-9">
        {/* <h5 className="L3headline">Prodej karet</h5> */}
        <ProductSearch />
        <Results />
      </div>
    </div>
  );
}
