import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchText) => {
    const results = await performSearch(searchText);
    setSearchResults(results);
  };

  const performSearch = async (searchText) => {
    try {
      const response = await fetch();
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
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
