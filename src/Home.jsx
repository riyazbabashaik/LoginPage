import React from 'react';
import Navbar from './Navbar';
 
const Home = () => {
  return (
    <>
      <Navbar pageName="Home Page" />
      <div className='home'>
        <h1 style={{ textAlign: 'center', fontSize:'42px', padding:'40px', margin:'50px' }} >Welcome to HomePage</h1>
    </div>
    </>
  );
};
 
export default Home;