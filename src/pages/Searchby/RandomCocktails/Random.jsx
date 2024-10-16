import React, { useState } from 'react';
import { CocktailDetails } from '../../../components/CocktailDetails/CocktailDetails';
import './Random.css'


export const RandomCocktails = () => {

  const [drinks, setDrinks] = useState(null);
  const [showDesign, setShowDesign] = useState(true);


  const fetchData = () => {
    setShowDesign(false)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => {
      setDrinks(data.drinks[0])
    })
    .catch((error) => console.error('sin datos:', error));
  }


  return (
    <section>
      <div className='divButton'>
      <button className='newCocktailButton' onClick={fetchData}>GET A RANDOM COCKTAIL!</button>
      </div>
      {showDesign && (
        <figure className='designDiv'> 
          <img className='design' src="/assets/pics/rbg1.jpeg" alt="randomBackground" />    
          <img className='design' src="/assets/pics/rbg2.jpeg" alt="randomBackground" />        
        </figure>
      )}
      
      {drinks ? (
        <>
        <CocktailDetails drinks={drinks} />
        </>
        ) : (
          <span>Loading...</span>
        )}
        </section>
    
    
  );
}

