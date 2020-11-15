export default function RegistrationForm() {
  return (
    <div class="container" style={{ marginTop: "360px" }}>
      <div class="row registrace">
        <div class="col-12">
          <h5 class="text-center">Registrační údaje</h5>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                E-mail slouží zároveň jako uživatelské jméno.
              </small>
            </div>
            <div class="row">
              <div class="col-6 form-group">
                <label for="exampleInputPassword1">Heslo</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="col-6 form-group">
                <label for="exampleInputPassword1">Heslo znovu</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
            </div>
            <h5 class="text-center my-3">Fakturační údaje</h5>
            <div class="row">
              <div class="col-6 form-group">
                <label for="exampleInputPassword1">Jméno</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="col-6 form-group">
                <label for="exampleInputPassword2">Příjmení</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 form-group">
                <label for="exampleInputPassword2">Ulice a č. p. </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="col-8 form-group">
                <label for="exampleInputPassword2">Obec</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="col-4 form-group">
                <label for="exampleInputPassword2">PSČ</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="col-6 form-group">
                <label for="exampleInputPassword2">Stát</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="col-6 form-group">
                <label for="exampleInputPassword2">Telefonní číslo</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="col-6 my-4 form-group">
                <input type="checkbox" value="" id="defaultCheck1" />
                <label class="font-weight-bolder pl-2" for="defaultCheck1">
                  Souhlasím s obchodními podmínkami
                </label>
              </div>
              <div class="col-12 mb-4">
                <button type="button" class="btn btn-primary btn-block">
                  Zaregistrovat
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
