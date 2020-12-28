import "./LoyaltyProgram.css";

export default function ShipmentPayment() {
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="loyaltyTitle">Doprava</h2>
        <h4 className="loyaltyTitle2">
          Poštovné a balné pro zásilky po České republice
        </h4>
        <p className="loyaltyText">
          Poštovné a balné pro objednávky v ceně do 2499 Kč včetně, zasílané na
          území České republiky, je 69 Kč. Pokud je hodnota objednávky vyšší,
          poštovné je ZDARMA Všechny balíkové zásilky jsou automaticky odesílané
          kurýrní službou.
        </p>
        <h4 className="loyaltyTitle2">
          Poštovné a balné pro zásilky na Slovensko
        </h4>
        <p className="loyaltyText">
          Poštovné a balné pro objednávky v ceně do 2499 Kč včetně, zasílané na
          Slovensko, je 110 Kč. Pokud je hodnota objednávky vyšší, poštovné je
          ZDARMA Všechny zásilky jsou automaticky odesílané kurýrní službou
          Zásilkovna.
        </p>
        <h4 className="loyaltyTitle2">Příplatek za balík</h4>
        <p className="loyaltyText">
          Pokud je objednávka odesílána jako balíček, resp. obsahuje zboží kde
          žádný z rozměrů není kratší jak 5 cm, je k ceně poštovného a balného
          připočítán příplatek 30 Kč. Každý takový produkt je v katalogu
          viditelně označen ikonkou balíčku. Balíkové zásilky jsou automaticky
          odesílané kurýrní službou Zásilkovna.
        </p>
        <h2 className="loyaltyTitle">Platba</h2>
        <h4 className="loyaltyTitle2">Platba na účet</h4>
        <p className="loyaltyText">
          Platba bankovním převodem v českých korunách na náš účet. Jako
          variabilní symbol je potřeba uvést číslo své objednávky, aby mohla být
          platba identifikována!
        </p>
        <h5 className="loyaltyText">Platební údaje:</h5>
        <p className="loyaltyText">
          Číslo účtu: 670100–2208972342/6210 (M-banka)
        </p>
        <h5 className="loyaltyText">Pro platby ze Slovenska:</h5>
        <p className="loyaltyText">
          Číslo účtu: 2200535463/8330 (pouze platby v EUR)
        </p>
        <p className="loyaltyText">
          IBAN: CZ34201000000­02200535463 BIC: FIOBCZPPXXX
        </p>
      </div>
    </div>
  );
}
