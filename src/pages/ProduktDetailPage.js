import Recommended from "../components/Recommended";
import ProduktDetail from "./../components/ProduktDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <div className="container productWrapper">
      <Zpet to="Products" />
      <ProduktDetail />
      <Recommended />
    </div>
  );
}
