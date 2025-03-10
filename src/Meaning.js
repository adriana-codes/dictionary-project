import React from "react";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        {props.meaning.definition}
        <br />
        {props.meaning.example}
      </p>
    </div>
  );
}

export default Meaning;
