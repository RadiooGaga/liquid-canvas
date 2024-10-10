import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../utils/useApi';
import { Cocktail } from '../../components/CocktailDetails/CocktailDetails';
import './CocktailById.css';


export const CocktailById = () => {

  const { idDrink } = useParams();
  const { drink } = useApi(idDrink, 'ById'); 

  return (
    <>
    <div className='divCocktail'>
      {drink ? (
        <Cocktail drinks={drink}/>  
      ) : (
        <p>No se encontró el cóctel.</p>
      )}
      {/*console.log({drink})*/}
    </div>
    </>
  );
};



