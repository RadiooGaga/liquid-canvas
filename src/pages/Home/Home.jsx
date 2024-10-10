import React from 'react';
import { Filters } from '../../components/Filters/Filters';
import { Footer } from '../../components/Footer/Footer';
import './Home.css';


export const Home = () => {

  return (
    <>
     <Filters />
      <figure className='homeDiv'>
          <img 
            className='coverImage' 
            src="/assets/pics/2.jpg" 
            alt="pictureCover" 
          />  
      </figure>
    <Footer />
    </>
  );
};



