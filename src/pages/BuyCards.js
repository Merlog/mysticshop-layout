import CardsSearch from "./../components/CardsSearch";
import ResultsCards from "./../components/ResultsCards";

export default function BuyCards() {
  return (
    <div className="row">
      <div className="col-12">
        {/* <h5 className="L3headline">Prodej karet</h5> */}
        <CardsSearch />
        <ResultsCards />
      </div>
    </div>
  );
}
