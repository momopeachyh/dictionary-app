import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState(null);

  function handleSearchChange(event) {
    setSearchterm(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchterm}`;
    axios.get(apiUrl).then(handleResponse);
    alert(searchterm);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleSearchChange}
          placeholder="Enter your favorite word!"
        />
        <input type="submit" value="search" />{" "}
      </form>
    </div>
  );
}
