import StaticPage from '../components/StaticPage';

export default function LoyaltyProgram() {
  return (
    <StaticPage>
      <h2 className="">Věrnostní sleva</h2>
      <p className="">
        Věrnostní slevu získá každý zákazník, který v rozmezí jednoho až sto dní
        zaplatí objednávky v celkové výši alespoň 4000 Kč.
      </p>
      <p className="">
        Tím získá slevu 5% na veškeré nabízené produkty a jednotlivé karty po
        dobu následujích sto dní.
      </p>
      <p className="">
        Sleva se nevztahuje na celé displeje (booster boxy) a některé další
        položky, které jsou všechny viditelně označeny v detailu zboží.
      </p>
      <p className="">Počítání věrnostní slevy začíná od 24. června 2013.</p>
    </StaticPage>
  );
}
