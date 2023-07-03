import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchText) => {
    const results = await performSearch(searchText);
    setSearchResults(results);
  };

  const performSearch = async (searchText) => {
    try {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/search?q=${searchText}`
      );
      const data = await response.json();

      const results = data.results.map((result) => ({
        id: result.id,
        name: result.name,
        keywords: result.keywords,
      }));

      return results.filter(
        (result) =>
          result.name.toLowerCase().includes(searchText.toLowerCase()) ||
          result.keywords.some((keyword) =>
            keyword.toLowerCase().includes(searchText.toLowerCase())
          )
      );
    } catch (error) {
      console.error("Error occurred during search:", error);
      return [];
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.index}>
            <Link to={`/result/${result.index}`}>{result.name}</Link>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
