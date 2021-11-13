import StaticPage from '../components/StaticPage';

export default function ShipmentPayment() {
  return (
    <StaticPage>
      <h1>Poštovné</h1>
      <h2>Poštovné a balné pro zásilky po České republice</h2>
      <ul>
        <li>
          Poštovné a balné pro objednávky v ceně <strong> do 2499 Kč </strong>
          včetně, zasílané na území České republiky, je
          <strong> 69 Kč. </strong>
          Pokud je hodnota objednávky vyšší,
          <strong> poštovné je ZDARMA. </strong>
          Všechny balíkové zásilky jsou automaticky odesílané kurýrní službou.
        </li>
      </ul>
      <h2>Poštovné a balné pro zásilky na Slovensko</h2>
      <ul>
        <li>
          Poštovné a balné pro objednávky v ceně<strong> do 2499 Kč </strong>
          včetně, zasílané na Slovensko, je<strong> 110 Kč. </strong>Pokud je
          hodnota objednávky vyšší,<strong> poštovné je ZDARMA. </strong>Všechny
          zásilky jsou automaticky odesílané kurýrní službou Zásilkovna.
        </li>
      </ul>

      <h2>Příplatek za balík</h2>
      <p>
        Pokud je objednávka odesílána jako balíček, resp. obsahuje zboží kde
        žádný z rozměrů není kratší jak 5 cm, je k ceně poštovného a balného
        připočítán příplatek 30 Kč. Každý takový produkt je v katalogu viditelně
        označen ikonkou balíčku. Balíkové zásilky jsou automaticky odesílané
        kurýrní službou Zásilkovna.
      </p>

      <h1>Jak uhradit objednávku</h1>
      <h2>Platba na účet</h2>
      <p>
        Platba bankovním převodem v <strong>českých korunách</strong> na náš
        účet. Jako variabilní symbol je potřeba uvést číslo své objednávky, aby
        mohla být platba identifikována!
      </p>
      <p>
        <strong>Platební údaje</strong>:
      </p>
      <ul>
        <li>
          Číslo účtu: 670100–2208972342/6210 <em>(M-banka)</em>
        </li>
      </ul>
      <p>
        <strong>Pro platby ze Slovenska</strong>:
      </p>
      <ul>
        <li>
          Číslo účtu: 2200535463/8330 <em>(pouze platby v EUR)</em>
        </li>
        <li>IBAN: CZ34201000000­02200535463</li>
        <li>BIC: FIOBCZPPXXX</li>
      </ul>
    </StaticPage>
  );
}
