import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: "",
    type: 'character'
  })
  const handleInputChange = (event) => {
    console.log('event.target.name', event.target.name)
    console.log('event.target.value', event.target.value)


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

        <div className='type'>
          <label>
            Type:
              <select onChange={handleInputChange} id='type' name='type'>
              <option value='character'>Character</option>
              <option value='episode'>Episode</option>
              <option value='location'>Location</option>
            </select>
          </label>
        </div>

        {/* <input
          onChange={handleInputChange}
          placeholder="type - character, location, episode"
          value={query.type}
          name="type"
        /> */}
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
