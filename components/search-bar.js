import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${query}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      onSearch(data.items);
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  return (
    <div style={{ marginLeft: 'auto', marginRight: '20px', display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search Google"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px', padding: '8px', fontSize: 'small', color: 'black' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
