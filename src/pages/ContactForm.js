export default function ContactForm() {
  return (
    <div className="row d-flex justify-content-center align-items-center my-4">
      <div className="col-12 p-4">
        <div className="row">
          <div className="col-2 py-4">
            <a
              href="#"
              className="btn btn-outline-success btn-sm align-baseline"
            >
              Zpět
            </a>
          </div>
          <div className="col-8 text-center py-4">
            <h5>Kontaktní formulář</h5>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-12">
              <label for="exampleFormControlInput1">Jméno a příjmení</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label for="exampleFormControlInput2">E-mail</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="exampleFormControlInput2"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label for="exampleFormControlTextarea1">Zpráva</label>
              <textarea
                className="form-control form-control-sm"
                id="exampleFormControlTextarea1"
                rows="6"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="col-6 my-4 form-group">
              <input type="checkbox" value="" id="defaultCheck1" />
              <label className="font-weight-bolder pl-2" for="defaultCheck1">
                Poslat mi kopii zprávy na email
              </label>
            </div>
          </div>
          <div className="form-row captcha">Captcha</div>
          <div className="form-row">
            <div className="col-12 d-flex justify-content-center mt-3">
              <button type="button" className="btn btn-success">
                Odeslat zprávu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
