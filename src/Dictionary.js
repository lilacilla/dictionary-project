import React from "react";
import Synonyms from "./Synonyms";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <h3>{props.dictionary.partOfSpeech}</h3>
      <p>
        {props.dictionary.definition}
        <br />
        <span className="dictionary-example">
          <em>{props.dictionary.example}</em>
        </span>
        <br />
      </p>
      <Synonyms synonyms={props.dictionary.synonyms} />
    </div>
  );
}
