import './Hlaska.css';
import CartButton from '../components/CartButton';

export default function Hlaska() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="hlaska-wrapper">
            <div className="hlaska-content">
              <p>
                Vaše objednávka byla úspěšně odeslána. <br />
                Potvrzení jsme Vám zaslali na zadaný e-mail.
                <small>*případně jiná hláška např. o chybě, atd.</small>
              </p>
              <CartButton
                to=""
                text="Přejít zpět na hlavní stránku"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
