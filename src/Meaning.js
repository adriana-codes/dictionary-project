import React from "react";

function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          {props.meaning.definition}
          <br />

          <em>{props.meaning.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Meaning;
