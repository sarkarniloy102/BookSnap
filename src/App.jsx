import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Hero from './Components/Hero';

const App = () => {

  const [searchQuery, setSearchQuery] = useState('best sellers');

  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar handleSearch={(term) => setSearchQuery(term)}></Navbar>
      <Banner></Banner>
      <Hero searchQuery={searchQuery}></Hero>
    </div>
  );
};

export default App;