import ProductsSection from "../components/ProductsSection";
import KartaDetail from "../components/KartaDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <>
      <Zpet to="BuyCards" />
      <KartaDetail />
      <ProductsSection title="Doporučené produkty" />
    </>
  );
}
