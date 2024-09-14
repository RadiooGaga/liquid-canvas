import React, {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CocktailById.css';
import Cocktail from '../../components/Cocktail/Cocktail';




const CocktailById = () => {

  const { idDrink } = useParams();
  const [selectedDrink, setSelectedDrink] = useState({});
  

  useEffect(() => {
    const fetchDrink = (idDrink) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((res) => res.json())
      .then((data) => setSelectedDrink(data.drinks ? data.drinks[0] : null))
      .catch((error) => console.error('sin datos:', error));
    }
      if (idDrink) {
        fetchDrink(idDrink);
      }
  }, [idDrink]); 
  


  return (
    <>
    
    <div className='divCocktail'>
      {selectedDrink ? (
        <Cocktail drinks={selectedDrink}/>  
        
      ) : (
        <p>No se encontró el cóctel.</p>
      )}
      {console.log(selectedDrink)}
    </div>
    </>
  );
};

export default CocktailById;

