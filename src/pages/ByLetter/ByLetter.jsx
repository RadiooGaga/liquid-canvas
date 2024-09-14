import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';
import './ByLetter.css'
import AlphabetButton from '../../components/AlphabetButton/AlphabetButton';


const ByLetter = () => {

  const [selectedLetter, setSelectedLetter] = useState(null);//el estado inicial es null
  const [drinks, setDrinks] = useState([]);
  console.log(drinks)
  const navigate = useNavigate();
  const { letter } = useParams(); //parámetro a extraer en el que se basan las modificaciones...
  console.log(letter)
 
  useEffect(() => {
    if (letter) {
      setSelectedLetter(letter);
      console.log(letter);
    }
  }, []);
  
    const fetchByLetter = (letter) => {

      console.log(letter, "FETCH DE LETTER")
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => res.json()) 
      .then((data) => setDrinks(data.drinks || []) )
      .catch((error) => console.error('sin datos:', error));
    }
    useEffect(() => {
      if (selectedLetter) {
        console.log(selectedLetter);
        fetchByLetter(selectedLetter);
      }
    }, [selectedLetter]);
     


  // Alhacer click actualiza estado de la letra
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    navigate(`/cocktails/${letter}`)
    //navega a la ruta con la letra seleccionada
    console.log(letter, "letra seleccionada")
  };

  const handleLetterCocktail = (idDrink) => {
      navigate(`/cocktail/${idDrink}`)
  }
 

  return (
    <>
        <div className='filters'>
        <AlphabetButton onLetterClick={handleLetterClick}/>
        </div>
       
        <div className='drinksDiv'>
          {drinks.length > 0 ? (
            drinks.map((drink) => (
                <div key={drink.idDrink} className='cocktailCard '>
                <h2>{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} 
                alt={drink.strDrink}
                onClick={() => handleLetterCocktail(drink.idDrink)} 
                />
                </div> 
          
            ))
          ) : (
                selectedLetter && <div className='noDrinksFound'>
                    <Loading 
                    selectedLetter={selectedLetter}
                    text= "LOADING DRINKS..."
                    message={`NO DRINKS FOUND FOR ${selectedLetter}`} />
                </div>
            
              )}
            
              
        </div>
    </>
  )
}

export default ByLetter