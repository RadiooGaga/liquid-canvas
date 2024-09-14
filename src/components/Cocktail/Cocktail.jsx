import React from 'react'
import './Cocktail.css'

const Cocktail = ({drinks}) => {

  if (!drinks) {
    return <p>THERE´S NO COCKTAIL INFO - PAGE NOT WORKING</p>;
  }

  const getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 10; i++) {
      const ingredient = drinks[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient)
      }
    }
    return ingredients
  };

  const getInstructions = () => {
    return drinks?.strInstructions || 'No instructions available'; 
  };

  
  return (

    <>
    {drinks ? (
      <>
      <div className='drinkCard'>
        <img className='cocktailImg' 
        src={drinks?.strDrinkThumb} 
        alt={drinks?.strDrink} />

        <div className='cocktailDetails'>
          <h2>{drinks.strDrink}</h2>
            <br />
          <h3>Ingredients:</h3>
            <p>{getIngredients().join(', ')}</p>
            <br />
            <br />
          <h3>Instructions: </h3>
            <p>{getInstructions()}</p>
            <br />
            <br />
          <h3>Category:</h3> <p>{drinks.strCategory}</p>
          <br />
          <h3>Type of glass:</h3><p>{drinks.strGlass}</p> 
          <br />
          <br />
            {drinks?.strVideo ? (
              <a className='watch' href={drinks?.strVideo} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            ) : (
              <span>  No tutorials available</span>
            )}
        </div>
      </div>
      </>
        ) : (
          <span>Loading...</span>
        )}
      </>
  )

}

export default Cocktail