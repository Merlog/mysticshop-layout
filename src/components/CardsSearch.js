import { useState } from "react";

export default function CardsSearch(props) {
  const [expandedSearch, setExpandedSearch] = useState(false);
  return (
    <form className="border border-dark p-3">
      <div className="row py-1">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Edice</label>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="form-group col-6">
              <select
                className="form-control form-control-sm"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group form-check col-6">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Celý blok
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-1">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Barva</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              bílá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              modrá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
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
            <label className="form-check-label" for="inlineCheckbox2">
              Vyhledat jen karty, které jsou VŠECH barev ze zadané kombinace
            </label>
          </div>
        </div>
      </div>
      <div className="row py-1">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Rarita</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              černá
            </label>
          </div>
        </div>
      </div>
      <div className="row py-1">
        <div className="col-2">
          <label for="exampleFormControlSelect1">Typ</label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
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
            <label className="form-check-label" for="inlineCheckbox1">
              něco něco
            </label>
          </div>
        </div>
      </div>

      {expandedSearch && (
        <>
          {!props.sellCards && (
            <>
              <div className="row py-1">
                <div className="col-2">
                  <label for="exampleFormControlSelect1">Kvalita nejhůře</label>
                </div>
                <div className="col-10">
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      text text
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      text text
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      text text
                    </label>
                  </div>
                </div>
              </div>
              <div className="row py-1">
                <div className="col-2">
                  <label for="exampleFormControlSelect1">
                    Další vlastnosti
                  </label>
                </div>
                <div className="col-10">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      1
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlSelect1">
                {props.sellCards ? `Výkupní cena` : `Cena`}
              </label>
            </div>
            <div className="col-10 form-inline">
              <label for="inputZip">min</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
              <label for="inputZip">max</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
              <label>Kč</label>
            </div>
          </div>
          {!props.sellCards && (
            <div className="row py-1">
              <div className="col-2">
                <label for="exampleFormControlSelect1">Jazyk</label>
              </div>
              <div className="col-10">
                <select
                  className="form-control form-control-sm w-25"
                  id="exampleFormControlSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          )}
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Sesílací cena</label>
            </div>
            <div className="col-10 form-inline">
              <select
                className="form-control form-control-sm w-25"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" for="inlineCheckbox1">
                Konvertovaná cena
              </label>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Síla</label>
            </div>
            <div className="col-10 form-inline">
              <select
                className="form-control form-control-sm w-25"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlSelect1">Odolnost</label>
            </div>
            <div className="col-10 form-inline">
              <select
                className="form-control form-control-sm w-25"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <input
                type="text"
                className="form-control form-control-sm"
                id="inputZip"
              />
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Ilustrátor</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="form-group col-4">
                  <textarea
                    className="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <div className="col-8">
                  <label>Např. stačí jen příjmení</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Typ přesněji</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="form-group col-4">
                  <textarea
                    className="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <div className="col-8">
                  <label>např. Zombie</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <label for="exampleFormControlTextarea1">Text karty</label>
            </div>
            <div className="col-10">
              <div className="row">
                <div className="form-group col-8">
                  <textarea
                    className="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <div className="col-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Fulltext
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="row py-1">
        <div className="col-2">
          <label for="exampleFormControlTextarea1">Název karty</label>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="form-group col-4">
              <textarea
                className="form-control form-control-sm"
                id="exampleFormControlTextarea1"
                rows="1"
              ></textarea>
            </div>
            <div className="col-8">
              <label>Stačí jen část</label>
            </div>
          </div>
        </div>
      </div>
      {!props.sellCards && (
        <div className="row py-1">
          <div className="col-2"></div>
          <div className="form-check col-10">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              Režim encyklopedie
            </label>
          </div>
        </div>
      )}
      <div className="row py-1">
        <div className="col-2"></div>
        <div className="form-check col-10">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" for="inlineCheckbox1">
            Nezobrazovat kusovky,{" "}
            {props.sellCards ? `které nepoptáváme` : `které nejsou na skladě`}
          </label>
        </div>
      </div>
      <div className="row py-1">
        <div className="col-2"></div>
        <div className="col-10">
          <a className="btn btn-primary mx-1" href="/#" role="button">
            Vyhledej
          </a>
          <button className="btn btn-primary mx-1" type="submit">
            Reset
          </button>
          <button
            className="btn btn-primary mx-1"
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
