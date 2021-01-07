import Products from "../components/Products";
import ProduktDetail from "./../components/ProduktDetail";
import Zpet from "../components/Zpet";

export default function ProduktDetailPage() {
  return (
    <>
      <Zpet to="Products" />
      <ProduktDetail />
      <Products title="Doporučené produkty" />
    </>
  );
}
