import React from "react";

export default function Search({ onSearch }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="search by name"
      onChange={onSearch}
    />
  );
}
