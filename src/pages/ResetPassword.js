export default function ResetPassword() {
  return (
    <div className="row d-flex justify-content-center align-items-center my-3">
      <form>
        <h2 class="h3 mb-3 fw-normal">Zadejte prosím e-mailovou adresu</h2>
        <label for="inputEmail" class="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email"
          required=""
          autofocus=""
        />
        <button
          class="w-100 btn btn-success"
          onClick={() =>
            alert(
              "Na zadanou adresu byl odeslán email s odkazem na resetování hesla."
            )
          }
        >
          Resetovat heslo
        </button>
      </form>
    </div>
  );
}
