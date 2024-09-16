import React, { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
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
      <Footer />
    </>
  );
};

export default Home;

