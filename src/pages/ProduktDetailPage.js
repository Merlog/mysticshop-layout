import ProductsSection from "../components/ProductsSection";
import ProduktDetail from "./../components/ProduktDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <>
      <Zpet to="Products" />
      <ProduktDetail />
      <ProductsSection title="Doporučené produkty" />
    </>
  );
}
