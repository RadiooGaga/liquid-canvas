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
            <img className='design' src="/assets/pics/rbg1.jpeg" alt="randomBackground" />
            <img className='design' src="/assets/pics/rbg2.jpeg" alt="randomBackground" />
          </figure>
        )}
  </section> 
  )
}
