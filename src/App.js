import React, { useEffect, useState } from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import SearchForm from './components/SearchForm.js';
import CharacterCard from './components/CharacterCard.js';
import axios from 'axios';

export default function App() {

  const [searchQuery, setSearchQuery] = useState();
  const [queryData, setQueryData] = useState();

  const onSearch = (event, query) => {
    event.preventDefault();
    console.log(query);
    setSearchQuery(`${query.type}/?name=${query.name}`)
  }

  useEffect(() => {
    axios
      .get(
        // `https://rickandmortyapi.com/api/${searchQuery.type}/?name=${searchQuery.name}`
        `https://rickandmortyapi.com/api/${searchQuery}`
      )
      .then(result => {
        setQueryData(result.data.results);
      })
      .catch(error => {
        console.log('error in app.js', error);
      });
  }, [searchQuery])

  console.log(queryData);

  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <section className='search-form'>
        <SearchForm
          onSearch={onSearch}
        />
      </section>
      <section className='character-list grid-view'>
        {queryData && queryData.map((characterData, index) => (
          <CharacterCard key={index} characterData={characterData} />
        ))}
      </section>
    </main>
    )
}