import React from "react";
import "./search.styles.css";

export default function Search({ onSearch }) {
  return (
      <div className="searchField raw form-inline justify-content-center">
        <input
          type="text"
          className="search  "
          placeholder="search by name"
          onChange={onSearch}
        />
      </div>
  );
}
