export default function ContactForm() {
  return (
    <div class="row d-flex justify-content-center align-items-center my-4">
      <div class="col-5 p-4">
        <div class="row">
          <div class="col-2 py-4">
            <a href="#" class="btn btn-outline-success btn-sm align-baseline"> Zpět </a>
            </div> 
            <div class="col-8 text-center py-4">
            <h5>Kontaktní formulář</h5>
          </div>
        </div> 
        <form>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="exampleFormControlInput1">Jméno a příjmení</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="exampleFormControlInput2">E-mail</label>
              <input
                type="email"
                class="form-control form-control-sm"
                id="exampleFormControlInput2"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-12">
              <label for="exampleFormControlTextarea1">Zpráva</label>
              <textarea
                class="form-control form-control-sm"
                id="exampleFormControlTextarea1"
                rows="6"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div class="col-12 d-flex justify-content-center mt-3">
              <button type="button" class="btn btn-success">
                Odeslat zprávu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
