import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "4c8c7b09546det2d72f3521aa5o882ea";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordEntry(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordEntry}
          placeholder="Need a definition? Start typing..."
          className="search-bar"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
