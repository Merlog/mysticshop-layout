// import Recommended from '../components/Recommended'
import KartaDetail from "../components/KartaDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <div className="container productWrapper">
      <Zpet to="BuyCards" />
      <KartaDetail />
      {/* <Recommended /> */}
    </div>
  );
}
