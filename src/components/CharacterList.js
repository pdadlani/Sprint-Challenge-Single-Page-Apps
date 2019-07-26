import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacterList(response.data.results);
      })
      .catch(error => {
        console.log('error in characterList.js', error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  // console.log(characterList);

  if (!characterList) {
    return <div>Loading character information...</div>
  }

  return (
    <section className='character-list grid-view'>
      {characterList.map((characterData, index) => (
        <CharacterCard key={index} characterData={characterData} />
      ))}
    </section>
    );
}

export default CharacterList;