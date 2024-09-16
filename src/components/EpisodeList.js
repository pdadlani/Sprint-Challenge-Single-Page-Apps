import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

const EpisodeList = () => {
  const [episodeList, setEpisodeList] = useState();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodeList(response.data.results);
      })
      .catch(error => {
        console.log('error in episodeList.js', error);
      });
  }, [])

  // console.log(episodeList);

  if (!episodeList) {
    return <div>Loading episode information...</div>
  }

  return (
    <section className='episode-list grid-view'>
      {episodeList.map((episodeData, index) => (
        <EpisodeCard key={index} episodeData={episodeData} />
      ))}
    </section>
  );
}

export default EpisodeList;