import { useState } from 'react';
import './CardsSearch.css';

export default function CardsSearch(props) {
  const [expandedSearch, setExpandedSearch] = useState(false);
  return (
    <form className="cards-search">
      <div className="row cards-search-row">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Edice</label>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-6">
              <select className="" id="exampleFormControlSelect1">
                <option>Standard</option>
                <option>Innistrad: Midnight Hunt</option>
                <option>Zendikar Rising</option>
                <option>Theros Beyond Death</option>
                <option>Unstable</option>
              </select>
            </div>
            <div className="form-check col-6">
              <input type="checkbox" id="exampleCheck1" />
              <label className="input-checkbox-label" for="exampleCheck1">
                Celý blok
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row cards-search-row">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Barva</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              <span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-bell-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                černá
              </span>
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              bílá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              žlutá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bell-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              multicolor
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className=""
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="input-checkbox-label" for="inlineCheckbox2">
              Vyhledat jen karty, které jsou VŠECH barev ze zadané kombinace
            </label>
          </div>
        </div>
      </div>
      <div className="row cards-search-row">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Rarita</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              mythic
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              special
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              rare
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              uncommon
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              common
            </label>
          </div>
        </div>
      </div>
      <div className="row cards-search-row">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Typ</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              basic land
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-bookmarks-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
              creature
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              instant
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              enchantment
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              artifact
            </label>
          </div>
        </div>
      </div>

      {expandedSearch && (
        <>
          {!props.sellCards && (
            <>
              <div className="row cards-search-row">
                <div className="col-2">
                  <label for="exampleFormControlSelect1">Kvalita nejhůře</label>
                </div>
                <div className="col-10">
                  <div className="form-check-inline">
                    <input
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="input-radio-label" for="exampleRadios1">
                      mint/nearmint
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="input-radio-label" for="exampleRadios1">
                      excellent
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="input-radio-label" for="exampleRadios1">
                      played
                    </label>
                  </div>
                </div>
              </div>
              <div className="row cards-search-row">
                <div className="col-2">
                  <label for="exampleFormControlSelect1">
                    Další vlastnosti
                  </label>
                </div>
                <div className="col-10">
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="input-checkbox-label"
                      for="inlineCheckbox1"
                    >
                      foil
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="input-checkbox-label"
                      for="inlineCheckbox1"
                    >
                      misprint
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="input-checkbox-label"
                      for="inlineCheckbox1"
                    >
                      podepsaná
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlSelect1">
                {props.sellCards ? `Výkupní cena v Kč` : `Cena v Kč`}
              </label>
            </div>
            <div className="col-2 form-inline">
              <label for="inputZip" className="mr-2">
                min
              </label>
              <div className="input-number-wrapper cards-search-input-number-wrapper">
                <input type="number" min="1" step="1" value="20" />
                <div className="input-number-btn-wrapper">
                  <div className="input-number-btn input-number-btn-up">+</div>
                  <div className="input-number-btn input-number-btn-down">
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 form-inline">
              <label for="inputZip" className="mr-2">
                max
              </label>
              <div className="input-number-wrapper cards-search-input-number-wrapper">
                <input type="number" min="1" step="1" value="2000" />
                <div className="input-number-btn-wrapper">
                  <div className="input-number-btn input-number-btn-up">+</div>
                  <div className="input-number-btn input-number-btn-down">
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!props.sellCards && (
            <div className="row cards-search-row">
              <div className="col-2">
                <label for="exampleFormControlSelect1">Jazyk</label>
              </div>
              <div className="col-2">
                <select className="" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          )}
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Sesílací cena</label>
            </div>
            <div className="col-1 form-inline">
              <select id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col-2 form-inline">
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
            </div>
            <div className="col-3 form-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="input-checkbox-label" for="inlineCheckbox1">
                Konvertovaná cena
              </label>
            </div>
          </div>
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Síla</label>
            </div>
            <div className="col-1 form-inline">
              <select id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col-2 form-inline">
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
            </div>
          </div>
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Odolnost</label>
            </div>
            <div className="col-1 form-inline">
              <select id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col-2 form-inline">
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
            </div>
          </div>
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Ilustrátor</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-6 inline-group">
                  <input type="text" id="exampleFormControlTextarea1" />
                </div>
                <small>Stačí jen příjmení nebo jméno</small>
              </div>
            </div>
          </div>
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Typ přesněji</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-6 inline-group">
                  <input type="text" id="exampleFormControlTextarea1" />
                </div>
                <small>Např. "zombie"</small>
              </div>
            </div>
          </div>
          <div className="row cards-search-row">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Text karty</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    id="exampleFormControlTextarea1"
                    className="w-100"
                  />
                </div>
                <div className="col-4">
                  <input type="checkbox" id="exampleCheck1" />
                  <label className="input-checkbox-label" for="exampleCheck1">
                    Fulltext
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="row cards-search-row">
        <div className="col-2">
          <label for="exampleFormControlTextarea1">Název karty</label>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-6 inline-group">
              <input type="text" id="exampleFormControlTextarea1" />
            </div>
            <small>Stačí jen část</small>
          </div>
        </div>
      </div>
      {!props.sellCards && (
        <div className="row cards-search-row">
          <div className="col-2"></div>
          <div className="form-check col-10">
            <input type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="input-checkbox-label" for="inlineCheckbox1">
              Režim encyklopedie
            </label>
          </div>
        </div>
      )}
      <div className="row cards-search-row">
        <div className="col-2"></div>
        <div className="form-check col-10">
          <input type="checkbox" id="inlineCheckbox1" value="option1" />
          <label className="input-checkbox-label" for="inlineCheckbox1">
            Nezobrazovat kusovky,{' '}
            {props.sellCards ? `které nepoptáváme` : `které nejsou na skladě`}
          </label>
        </div>
      </div>
      <div className="row cards-search-row">
        <div className="col-2"></div>
        <div className="col-10">
          <a className="btn mx-1" href="/#" role="button">
            Vyhledej
          </a>
          <button className="btn mx-1" type="submit">
            Reset
          </button>
          <button
            className="btn mx-1"
            type="submit"
            onClick={(event) => {
              setExpandedSearch(!expandedSearch);
              event.preventDefault();
            }}
          >
            {expandedSearch ? `Základní vyhledávání` : `Rozšířené vyhledávání`}
          </button>
        </div>
      </div>
    </form>
  );
}
