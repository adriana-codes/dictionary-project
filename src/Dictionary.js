import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "0be192793f55aa475o5602t2cabd6e24";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            id="dictionary-bar"
            className="search-input"
            onChange={handleChange}
          />
        </form>
        <div className="hint">
          <small>suggested words: wine, cheese, bread...</small>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
