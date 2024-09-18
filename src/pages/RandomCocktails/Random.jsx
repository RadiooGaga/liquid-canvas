
import React, { useState } from 'react';
import './Random.css'
import Cocktail from '../../components/Cocktail/Cocktail';


const RandomCocktails = () => {

  const [drinks, setDrinks] = useState(null);
  const [showDesign, setShowDesign] = useState(true);


  const fetchData = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => {
      setDrinks(data.drinks[0])
      setShowDesign(false);
    })

    .catch((error) => console.error('sin datos:', error));
  }

  return (
    <div>
      <div className='divButton'>
      <button className='newCocktailButton' onClick={fetchData}>GET A RANDOM COCKTAIL!</button>
      </div>
      {showDesign && (
        <div className='designDiv'> 
          <img className='design' src="/assets/pics/rbg1.jpeg" alt="randomBackground" />    
          <img className='design' src="/assets/pics/rbg2.jpeg" alt="randomBackground" />        
        </div>
      )}
      
      {drinks ? (
        <>
        <Cocktail drinks={drinks} />
        </>
        ) : (
          <span>Loading...</span>
        )}
        </div>
    
    
  );
}

export default RandomCocktails