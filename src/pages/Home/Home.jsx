import React from 'react';
import Filters from '../../components/Filters/Filters';
import './Home.css';
import Footer from '../../components/Footer/Footer';


const Home = () => {

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

export default Home;

