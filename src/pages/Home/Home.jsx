import React, { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import './Home.css';


const Home = () => {

  return (
    <>
     <Filters />
      <div className='homeDiv'>
          <img 
            className='coverImage' 
            src="/assets/pics/coverByVecstock.webp" 
            alt="pictureCover" 
          />  
      </div>
 
    </>
  );
};

export default Home;

