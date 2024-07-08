import React from "react";
import Dictionary from "./Dictionary";
import "./Results.css";

export default function Results(props) {
  if (props.outcome) {
    return (
      <div className="Results">
        <section>
          <h2 className="results-keyword"> {props.outcome.word}</h2>
          <p className="phonetics"> [{props.outcome.phonetic}]</p>
        </section>
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
