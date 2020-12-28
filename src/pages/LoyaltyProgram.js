import "./LoyaltyProgram.css";

export default function LoyaltyProgram() {
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="loyaltyTitle">Věrnostní sleva</h2>
        <p className="loyaltyText">
          Věrnostní slevu získá každý zákazník, který v rozmezí jednoho až sto
          dní zaplatí objednávky v celkové výši alespoň 4000 Kč.
        </p>
        <p className="loyaltyText">
          Tím získá slevu 5% na veškeré nabízené produkty a jednotlivé karty po
          dobu následujích sto dní.
        </p>
        <p className="loyaltyText">
          Sleva se nevztahuje na celé displeje (booster boxy) a některé další
          položky, které jsou všechny viditelně označeny v detailu zboží.
        </p>
        <p className="loyaltyText">
          Počítání věrnostní slevy začíná od 24. června 2013.
        </p>
      </div>
    </div>
  );
}
