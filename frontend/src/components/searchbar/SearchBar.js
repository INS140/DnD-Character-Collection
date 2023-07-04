import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
