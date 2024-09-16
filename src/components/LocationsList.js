import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';
import { Card } from 'semantic-ui-react'



const LocationsList = () => {
  const [locationList, setLocationList] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocationList(response.data.results);
      })
      .catch(error => {
        console.log('error in locationList.js', error);
      })
  }, [])

  if (!locationList) {
    return <div>Loading location information...</div>
  }
  console.log('locationList', locationList);

  return (
    <section className='location-list grid-view'>
      {locationList.map((locationData, index) => (
        <LocationCard key={index} locationData={locationData} />
      ))}
    </section>
  )
}

export default LocationsList;