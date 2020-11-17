import "./RegistrationForm.css";

export default function RegistrationForm() {
  return (
    <div class="row RegistrationForm_wrapper d-flex justify-content-center align-items-center">
      <div class="col-12 RegistrationForm_innerWrapper p-4">
        <div className="row">
          <div className="col mb-3">
            <h5 class="text-center">Registrační údaje</h5>
          </div>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="exampleInputEmail1">E-mail</label>
              <input
                type="email"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                E-mail slouží zároveň jako uživatelské jméno.
              </small>
            </div>
          </div>
          <div class="form-row">
            <div class="col-6 form-group">
              <label for="exampleInputPassword1">Heslo</label>
              <input
                type="password"
                class="form-control form-control-sm"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div class="col-6 form-group">
              <label for="exampleInputPassword2">Heslo znovu</label>
              <input
                type="password"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col mb-3">
              <h5 class="text-center my-3">Fakturační údaje</h5>
            </div>
          </div>
          <div class="form-row">
            <div class="col-6 form-group">
              <label for="exampleInputPassword1">Jméno</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword1"
              />
            </div>
            <div class="col-6 form-group">
              <label for="exampleInputPassword2">Příjmení</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-9 form-group">
              <label for="exampleInputPassword2">Ulice</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
            <div class="col-3 form-group">
              <label for="exampleInputPassword2">Číslo popisné/evidenční</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
          </div>
          <div className="form-row">
            <div class="col-9 form-group">
              <label for="exampleInputPassword2">Obec</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
            <div class="col-3 form-group">
              <label for="exampleInputPassword2">PSČ</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
          </div>
          <div className="form-row">
            <div class="col-9 form-group">
              <label for="exampleInputPassword2">Stát</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
            <div class="col-3 form-group">
              <label for="exampleInputPassword2">Telefonní číslo</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputPassword2"
              />
            </div>
          </div>
          <div className="form-row">
            <div class="col-6 my-4 form-group">
              <input type="checkbox" value="" id="defaultCheck1" />
              <label class="font-weight-bolder pl-2" for="defaultCheck1">
                Souhlasím s obchodními podmínkami
              </label>
            </div>
          </div>
          <div className="form-row">
            <div class="col-12 d-flex justify-content-center mt-3">
              <button type="button" class="btn btn-success px-4">
                Zaregistrovat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
