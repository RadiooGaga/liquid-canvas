import React from 'react'
import './RandomSelector.css'

export const RandomSelector = ({ onClick, showDesign }) => {

return (
  <section>
    <div className='divButton'>
      <button className='newCocktailButton' onClick={onClick}>
        GET A RANDOM COCKTAIL!
      </button>
    </div>
       {showDesign && ( 
          <figure className='designDiv'>

          </figure>
        )}
  </section> 
  )
}
