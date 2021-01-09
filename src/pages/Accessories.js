import L3menu from "../components/L3menu";
import ResultsProducts from "../components/ResultsProducts";

export default function Accessories() {
  return (
    <div className="row">
      <div className="col-2">
        <L3menu />
      </div>
      <div className="col-10">
        <ResultsProducts />
      </div>
    </div>
  );
}
