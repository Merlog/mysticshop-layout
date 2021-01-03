import ContactForm from "../pages/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="row">
        <h2>Kontakt</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <ContactForm />
        </div>
        <div className="col-6">
          <h4>
            Provozovatel e-shopu MysticShop.cz a adresa pro možnost osobního
            odběru objednávek
          </h4>
          <p>Štefan Čonka</p>
          <p>Jana Palacha 1636</p>
          <p>27201 Kladno</p>
          <h5>
            NA TÉTO ADRESE SE NENACHÁZÍ KAMENNÝ OBCHOD A NENÍ MOŽNÉ ZDE PŘÍMO
            NAKUPOVAT!!
          </h5>
          <p>IC: 74269305</p>
          <p>DIC: CZ8008021912</p>
          <p>č.u.: 670100–2208972342/6210 (pro platby v CZK)</p>
          <p>č.u.: 2200535463/8330 (pro platby v EUR)</p>
          <p>IBAN: CZ34201000000­02200535463</p>
          <p>BIC: FIOBCZPPXXX</p>
          <p>tel.: +420 774 566 102 (10 – 18 hod)</p>
          <p>e-mail: obchod@mysticshop­.cz</p>
        </div>
      </div>
    </>
  );
}
