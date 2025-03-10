import React from "react";
import Meaning from "./Meaning";

function Results(props) {
  console.log(props.meanings);
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <h4>{props.results.phonetic}</h4>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
