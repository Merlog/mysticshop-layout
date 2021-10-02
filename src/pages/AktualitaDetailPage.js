import StaticPage from '../components/StaticPage';
import Zpet from '../components/Zpet';

export default function AktualitaDetailPage() {
  return (
    <>
      <Zpet to="Aktuality" />
      <StaticPage>
        <h2 className="mb-4">Kompletní spoiler Avacyn Restored</h2>
        <p className="aktualityPageText">
          <a href="#">Kompletní spoiler Avacyn Restored </a>
          včetně obrázků je na světě. Prohlédni si už nyní karty, které rozbalíš
          nejdříve o víkendu.{' '}
          <a href="#"> Výhodné ceny pro předprodej produktů Avacyn Restored </a>
          platí již jen několik dní, proto si pospěš{' '}
          <b> a objednej ještě dnes!</b>
        </p>
      </StaticPage>
    </>
  );
}
