import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';
import { CocktailCard } from '../CocktailCard/CocktailCard';
import './SelectedDrinksSection.css'

export const SelectedDrinksSection = ({ drinks, drinksPerPage, selected }) => {

    const navigate = useNavigate();
    
    // Cálculo de cocteles por página 
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * drinksPerPage;
    const endIndex = startIndex + drinksPerPage;
    const currentDrinks = drinks.slice(startIndex, endIndex);
    const isLastPage = endIndex >= drinks.length; 


    const handleIdCocktail = ((idDrink) => {
      navigate(`/cocktail/${idDrink}`)
    })

  return (
    <section className='drinksSection'>
    {currentDrinks.length > 0 ? (
      currentDrinks.map((drink) => (
          <CocktailCard 
              key={drink.idDrink}
              drink={drink} 
              onClick={() => handleIdCocktail(drink.idDrink)} 
          />
      ))
    ) : (
      selected && (
        <div className='noDrinksFound'>
          <Loading
            selected={selected}
            text="LOADING DRINKS..."
            message={`NO DRINKS FOUND FOR ${selected}`}
          />
        </div>
        
      )
    )}
    {drinks.length > drinksPerPage && (
      <Pagination page={page} setPage={setPage} isLastPage={isLastPage} />
    )}
  </section>
  )
}

