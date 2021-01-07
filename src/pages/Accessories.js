import L3menu from "../components/L3menu";
import Results from "../components/Results";

export default function Accessories() {
  return (
    <div className="row">
      <div className="col-2">
        <L3menu />
      </div>
      <div className="col-10">
        <Results />
      </div>
    </div>
  );
}
