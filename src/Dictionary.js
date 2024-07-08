import React from "react";
import Synonyms from "./Synonyms";
import "./Synonyms.css";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <section>
        <h3>{props.dictionary.partOfSpeech}</h3>

        <div>{props.dictionary.definition}</div>

        <div>
          <span className="dictionary-example">
            <em>{props.dictionary.example}</em>
          </span>
        </div>

        <Synonyms synonyms={props.dictionary.synonyms} />
      </section>
    </div>
  );
}
