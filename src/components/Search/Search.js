import React from "react";
import "./search.styles.css";

const Search = ({ onSearch }) => {
  return (
    <div className="searchField raw form-inline justify-content-center">
      <input
        type="text"
        className="search  "
        placeholder="search by name"
        //here we are passing method that is responsible for narrowing list of employees according to user's input in search field
        onChange={onSearch}
      />
    </div>
  );
};
export default Search;
