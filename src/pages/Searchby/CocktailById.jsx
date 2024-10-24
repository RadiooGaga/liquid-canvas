import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../utils/useApi';
import { CocktailDetails } from '../../components/CocktailDetails/CocktailDetails';



export const CocktailById = () => {

  const { idDrink } = useParams();
  const { drink } = useApi(idDrink, 'ById'); 

  return (
    <>
    <div className='divCocktail'>
      {drink ? (
        <CocktailDetails drinks={drink}/>  
      ) : (
        <p>No se encontró el cóctel.</p>
      )}
      {console.log({drink})}
    </div>
    </>
  );
};