import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import ImageResults from "./ImageResults";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    console.log(response);
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "0be192793f55aa475o5602t2cabd6e24";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
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
      <ImageResults results={images} />
    </div>
  );
}

export default Dictionary;
