import "./CookieAlert.css";

export default function CookieAlert(props) {
  return (
    <div className="cookie px-5 py-2 d-flex justify-content-center">
      <p>
        Tento web používá soubory cookie. Dalším procházením tohoto webu
        vyjadřujete souhlas s jejich používáním.
      </p>
      <button
        type="button"
        class="btn btn-warning mx-3"
        onClick={() => {
          props.setCookieAlert(false);
        }}
      >
        Souhlasím
      </button>
    </div>
  );
}
