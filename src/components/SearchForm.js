import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: "",
    type: ''
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  return (
    <section className="search-form">
      <form onSubmit={(event) => onSearch(event, query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <input
          onChange={handleInputChange}
          placeholder="type - character, location, episode"
          value={query.type}
          name="type"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
