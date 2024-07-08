import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";
import "./Dictionary.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "4c8c7b09546det2d72f3521aa5o882ea";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordEntry(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordEntry}
            placeholder="Need a definition? Start typing..."
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <Results outcome={results} />
      </div>
    );
  } else {
    load();
  }
}
