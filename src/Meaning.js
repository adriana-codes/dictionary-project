import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <section>
          <h4>{props.meaning.partOfSpeech}</h4>
          <div className="Definition">{props.meaning.definition}</div>
          <div className="Example">{props.meaning.example}</div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}

export default Meaning;
