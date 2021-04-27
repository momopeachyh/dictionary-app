import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Data from "./Data";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [searchterm, setSearchterm] = useState(props.defaultTerm);
  let [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSearchChange(event) {
    setSearchterm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    // dictionary api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);

    //  pexels api documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f917000010000015ca309cd3e144b798fc6690427184313";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchterm}&per_page=4`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                onChange={handleSearchChange}
                placeholder="Enter your favorite word!"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="search" className="btn" />{" "}
            </div>
          </div>
        </form>
        <Data data={data} />
        <Photos photos={photos} altProp={searchterm} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
