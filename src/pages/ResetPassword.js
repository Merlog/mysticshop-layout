import CartButton from '../components/CartButton';
import './ResetPassword.css';

export default function ResetPassword() {
  return (
    <div className="row resetPassword">
      <CartButton to="/mysticshop/LogIn" text="Zpět k přihlášení" />
      <form
        className="resetPasswordForm"
        onSubmit={() =>
          alert(
            'Na zadanou adresu byl odeslán email s odkazem na resetování hesla.'
          )
        }
      >
        <h2 class="mb-5 fw-normal">Zadejte prosím e-mailovou adresu</h2>
        <input
          type="email"
          id="inputEmail"
          class="form-control mb-4 resetPasswordInput"
          placeholder="Email"
          required=""
          autofocus=""
        />
        <button
          type="submit"
          class="w-100 btn btn-success btn-lg mb-4 resetPasswordSubmit"
        >
          Resetovat heslo
        </button>
      </form>
    </div>
  );
}
