import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (alternative, index) {
          return <li key={index}>{alternative}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
