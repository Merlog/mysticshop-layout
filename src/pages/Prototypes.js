export default function Prototypes() {
  return (
    <div className="row">
      <div className="col-12">
        <h1>Jak nakupovat h1</h1>
        <h2>Jak nakupovat h2</h2>
        <h3>Jak nakupovat h3</h3>
        <h4>Jak nakupovat h4</h4>
        <h5>Jak nakupovat h5</h5>
        <h6>Jak nakupovat h6</h6>
        <p>Lorem ipsum</p>
        <p className="warning">Lorem ipsum</p>
        <p>
          Dobu převzetí je <strong>nutné</strong> vždy domluvit předem na tel.:
          <strong>774 566 102</strong>
        </p>
        <p>
          Dobu převzetí je <em>nutné</em> vždy domluvit předem na tel.:
          <em>774 566 102</em>
        </p>
        <small>Lorem ipsum small</small>
        <br />
        <big>Lorem ipsum big</big>
        <br />
        <ul>
          <li>Lorem ipsum 1</li>
          <li>Lorem ipsum 2</li>
          <li>Lorem ipsum 3</li>
          <li>Lorem ipsum 4</li>
        </ul>
        <ol>
          <li>
            <a href="">Bonusy a dárky k objednávkám!</a>
          </li>
          <li>
            <a href="">Výkup jednotlivých karet MtG</a>
          </li>
          <li>
            <a href="">Jak se objednává</a>
          </li>
          <li>
            <a href="">Reklamace a odstoupení od kupní smlouvy</a>
          </li>
        </ol>
        <a href="">Anchor tag/Link</a>
        <br />
        <a href="">
          <strong>Anchor tag/Link</strong>
        </a>
        <br />
        <button type="button" class="btn">
          Button
        </button>
        <br />
        <label for="input-text" className="input-text-label">
          štítek textového inputu:
        </label>
        <input type="text" name="input-text" placeholder="textový input" />
        <br />
        radio input:
        <br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html" className="input-radio-label">
          HTML
        </label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css" className="input-radio-label">
          CSS
        </label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label for="javascript" className="input-radio-label">
          JavaScript
        </label>
        <br />
        checkbox input:
        <br />
        <input type="checkbox" name="input-checkbox" checked />
        <label for="input-checkbox" className="input-checkbox-label">
          Checkbox
        </label>
        <br />
        select box:
        <br />
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        submit:
        <br />
        <input type="submit" value="Submit" className="btn" />
        <br />
        number input with quantity:
        <br />
        <div className="input-number-wrapper">
          <input type="number" min="1" step="1" value="2" />
          <div className="input-number-btn-wrapper">
            <div className="input-number-btn input-number-btn-up">+</div>
            <div className="input-number-btn input-number-btn-down">-</div>
          </div>
        </div>
      </div>
    </div>
  );
}
