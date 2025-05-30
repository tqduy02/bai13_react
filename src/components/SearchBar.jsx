import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for images"
      />
    </form>
    </div>
  );
}

export default SearchBar;
