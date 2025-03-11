import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <section>
          <h4>{props.meaning.partOfSpeech}</h4>
          <p>
            {props.meaning.definition}
            <br />

            <em>{props.meaning.example}</em>
          </p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}

export default Meaning;
