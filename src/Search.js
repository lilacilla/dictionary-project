import React, { useState } from "react";
import "./Dictionary.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
