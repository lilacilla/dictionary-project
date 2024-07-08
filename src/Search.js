import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";
import "./Dictionary.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function discover() {
    let apiKey = "4c8c7b09546det2d72f3521aa5o882ea";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "MTCfOAG953c6eoSBtQBqjV5ibJWZF3eLsMlwRpPngpOuB0cgRAcbGXxR";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    discover();
  }

  function handleKeywordEntry(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    discover();
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
