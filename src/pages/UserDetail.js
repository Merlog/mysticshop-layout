import "./UserDetail.css";

export default function UserDetail() {
  return (
    <>
      <div className="row d-flex flex-column">
        <h5 className="text-center">Přihlašovací údaje</h5>
        <form>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                E-mail
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Zadaný e-mail"
                disabled
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="inputPassword6" class="col-form-label">
                Heslo
              </label>
            </div>
            <div class="col-4">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                min="8"
              />
            </div>
            <div class="col-4">
              <span id="passwordHelpInline" class="form-text">
                min. 8 znaků
              </span>
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="inputPassword6" class="col-form-label">
                Heslo znovu
              </label>
            </div>
            <div class="col-4">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                min="8"
              />
            </div>
            <div class="col-4">
              <span id="passwordHelpInline" class="form-text">
                min. 8 znaků
              </span>
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div className="col-2">
              <label for="inputPassword6" class="col-form-label">
                Datum registrace
              </label>
            </div>
            <div className="col-4">
              <input
                type="date"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="10.10.2020"
                disabled
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success">
            Uložit
          </button>
        </form>
      </div>
      <div className="row d-flex flex-column">
        <h5 className="text-center">Kontaktní údaje</h5>
        <form>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Jméno
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Příjmení
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Ulice a č. p. / č. e.
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
              />
            </div>
            <div class="col-2">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
                placeholder="č. p. / č. e."
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Město a PSČ
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
              />
            </div>
            <div class="col-2">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
                placeholder="PSČ"
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Stát
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-2">
              <label for="disabledTextInput" class="form-label">
                Telefon
              </label>
            </div>
            <div class="col-4">
              <input type="text" id="disabledTextInput" class="form-control" />
            </div>
          </div>
          <div class="row form-check g-3 align-items-center">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Přeji si být informován emailem o novinkách na MysticShopu
            </label>
          </div>

          <button type="submit" class="btn btn-success">
            Uložit
          </button>
        </form>
      </div>
    </>
  );
}
