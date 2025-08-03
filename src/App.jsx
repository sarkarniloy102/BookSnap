import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

const App = () => {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default App;