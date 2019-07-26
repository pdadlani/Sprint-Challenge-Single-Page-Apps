import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import EpisodeList from './components/EpisodeList.js';
import LocationsList from './components/LocationsList.js';

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    <LocationsList />
    <EpisodeList />
  </main>
}