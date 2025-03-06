import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "0be192793f55aa475o5602t2cabd6e24";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" id="dictionary-bar" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Dictionary;
