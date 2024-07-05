import React from "react";
import Dictionary from "./Dictionary";

export default function Results(props) {
  console.log(props.outcome.word);
  console.log(props.outcome.meanings);
  //console.log(props.outcome.meanings[0].definition);
  if (props.outcome) {
    console.log(props.outcome.meanings[0]);
    return (
      <div className="Results">
        <h2> {props.outcome.word}</h2>
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
