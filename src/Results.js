import React from "react";
import Dictionary from "./Dictionary";

export default function Results(props) {
  if (props.outcome) {
    return (
      <div className="Results">
        <h2> {props.outcome.word}</h2>
        <p> {props.outcome.phonetic}</p>
        {props.outcome.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Dictionary dictionary={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
