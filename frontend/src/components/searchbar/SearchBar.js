import React, { useState } from "react";
import Input from "../ui-kit/Input";

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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
