import Products from "../components/Products";
import KartaDetail from "../components/KartaDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <>
      <Zpet to="BuyCards" />
      <KartaDetail />
      <Products title="Doporučené produkty" />
    </>
  );
}
