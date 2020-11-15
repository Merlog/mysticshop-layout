export default function ContactForm() {
  return (
    <div class="container" style={{marginTop: "360px"}}>
      <div class="row kontaktniFormular">
        <div class="col-12">
          <h5 class="text-center">Kontaktní formulář</h5>
          <form>
            <div class="row">
              <div class="form-group col-12">
                <label for="exampleFormControlInput1">Jméno</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-12">
                <label for="exampleFormControlInput1">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group col-12">
                <label for="exampleFormControlTextarea1">Zpráva</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <div class="col-12">
                <button type="button" class="btn btn-primary btn-block">
                  Odeslat zprávu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
