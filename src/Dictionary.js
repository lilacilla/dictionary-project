import React from "react";

export default function Dictionary(props) {
  console.log(props.dictionary.example);
  return (
    <div className="Dictionary">
      <h3>{props.dictionary.partOfSpeech}</h3>
      <p>
        {props.dictionary.definition}
        <br />
        <span className="dictionary-example">
          <em>{props.dictionary.example}</em>
        </span>
      </p>
    </div>
  );
}
