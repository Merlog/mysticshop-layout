export default function ContactForm() {
  return (
    <div className="contactForm">
      <form
        className="contactForm"
        onSubmit={() => alert('Vaše zpráva byla úspěšně odeslána')}
      >
        <h4 class="mb-5 fw-normal">Kontaktní formulář</h4>
        <input
          type="text"
          className="form-control mb-4"
          id="exampleFormControlInput1"
          placeholder="Jméno a příjmení"
          required
        />
        <input
          type="email"
          className="form-control mb-4"
          id="exampleFormControlInput2"
          placeholder="E-mail"
          required
        />
        <textarea
          className="form-control mb-4"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="Zpráva"
          required
        />
        <div className="mb-4">
          <input type="checkbox" value="" id="defaultCheck1" />
          <label className="font-weight-bolder pl-2" for="defaultCheck1">
            Poslat mi kopii zprávy na email
          </label>
        </div>
        <div className="captcha">Captcha</div>
        <button
          type="submit"
          className="w-100 btn btn-success btn-lg mb-4 contactSubmit"
        >
          Odeslat zprávu
        </button>
      </form>
    </div>
  );
}
