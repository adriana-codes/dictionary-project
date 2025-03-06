import React, { useState } from "react";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" id="dictionary-bar" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Dictionary;
