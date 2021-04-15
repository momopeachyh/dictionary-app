import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchterm, setSearchterm] = useState(null);

  function handleSearchChange(event) {
    setSearchterm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
