import React from "react";
import Synonyms from "./Synonyms";

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
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}

export default Meaning;
