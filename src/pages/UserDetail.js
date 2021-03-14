import "./UserDetail.css";
import { useState } from "react";

export default function UserDetail() {
  const [passwordChange, setPasswordChange] = useState(false);
  const [detailsChange, setDetailsChange] = useState(false);

  const handleAlert = () => {
    alert(
      "Opravdu si přejete odstranit svůj účet? Tato akce je nevratná. Váš účet nebude možné obnovit."
    );
  };

  return (
    <>
      <div className="row d-flex flex-column user-detail-section">
        <div className="col-12">
          <h3 className="mb-4">Přihlašovací údaje</h3>
          <hr />
          <div className="mt-5">
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  E-mail
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Zadaný e-mail"
                  disabled
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div className="col-3">
                <label for="disabledTextInput" class="col-form-label">
                  Datum registrace
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="10. 10. 2020"
                  disabled
                />
              </div>
            </div>
            {!passwordChange && (
              <button
                class="btn user-detail-button"
                onClick={() => setPasswordChange(true)}
              >
                Změnit heslo
              </button>
            )}
          </div>
          {passwordChange && (
            <form className="mt-5">
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-3">
                  <label for="inputPassword6" class="col-form-label">
                    Nové heslo
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="password"
                    id="inputPassword6"
                    class="form-control user-detail-input"
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
              <div class="row mb-3 g-3 align-items-center">
                <div class="col-3">
                  <label for="inputPassword6" class="col-form-label">
                    Nové heslo znovu
                  </label>
                </div>
                <div class="col-4">
                  <input
                    type="password"
                    id="inputPassword6"
                    class="form-control user-detail-input"
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
              <button
                class="btn user-detail-button"
                onClick={() => setPasswordChange(false)}
              >
                Uložit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="row d-flex flex-column user-detail-section">
        <div className="col-12">
          <h3 className="mb-4">Kontaktní údaje</h3>
          <hr />
          <form className="mt-5">
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Jméno
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Jméno"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Příjmení
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Příjmení"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Ulice
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Javorová"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Číslo popisné / evidenční
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="111"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Obec / Město
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Praha 1"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  PSČ
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="101 00"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Stát
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="Česká Republika"
                  disabled={!detailsChange}
                  required
                />
              </div>
            </div>
            <div class="row mb-3 g-3 align-items-center">
              <div class="col-3">
                <label for="disabledTextInput" class="form-label">
                  Telefon
                </label>
              </div>
              <div class="col-4">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control user-detail-input"
                  placeholder="777 777 777"
                  disabled={!detailsChange}
                />
              </div>
            </div>
            <div class="row form-check g-3 align-items-center">
              <div class="col-12">
                <label class="form-check-label" for="exampleCheck1">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    disabled={!detailsChange}
                    defaultChecked
                  />
                  <span className="user-detail-checkbox-label">
                    Přeji si být informován emailem o novinkách na MysticShopu
                  </span>
                </label>
              </div>
            </div>
            <button
              class="btn user-detail-button"
              onClick={() => setDetailsChange(!detailsChange)}
            >
              {detailsChange ? "Uložit" : "Upravit údaje"}
            </button>
          </form>
        </div>
      </div>
      <div className="row d-flex flex-column user-detail-section">
        <div className="col-12">
          <h3 className="mb-4">Odstranit účet</h3>
          <hr />
          <div>
            <button
              type="submit"
              onClick={() => handleAlert()}
              class="btn user-detail-button"
            >
              Smazat účet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
