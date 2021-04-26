import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Data from "./Data";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState(null);
  let [data, setData] = useState(null);

  function handleSearchChange(event) {
    setSearchterm(event.target.value);
  }

  function handleResponse(response) {
    setData(response.data[0]);
  }

  // dictionary api documentation: https://dictionaryapi.dev/
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);
  }

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
    </div>
  );
}
