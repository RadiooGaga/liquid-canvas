import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlphabetButton from '../../components/AlphabetButton/AlphabetButton';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import './ByLetter.css'



const ByLetter = () => {

  const [selectedLetter, setSelectedLetter] = useState(null);//el estado inicial es null
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();
  const { letter } = useParams(); //parámetro a extraer en el que se basan las modificaciones...
  const [page, setPage] = useState(1);
  const drinksPerPage = 10;



 
  useEffect(() => {
    if (letter) {
      setSelectedLetter(letter);
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

  const startIndex = (page - 1) * drinksPerPage;
  const endIndex = startIndex + drinksPerPage;
  const currentDrinks = drinks.slice(startIndex, endIndex);
  const isLastPage = endIndex >= drinks.length; console.log(isLastPage, "ultima pagina")
   console.log(currentDrinks, "productos en esta página")
   
   
  

  return (
    <>
        <div className='filters'>
        <AlphabetButton onLetterClick={handleLetterClick}/>
        </div>
       
        <div className='drinksDiv'>
        {drinks.length > 0 ? (
          currentDrinks.map((drink) => (
            <div key={drink.idDrink} className='cocktailCard'>
              <h2>{drink.strDrink}</h2>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                onClick={() => handleLetterCocktail(drink.idDrink)}
              />
            </div>
          ))
        ) : (
          selectedLetter && (
            <div className='noDrinksFound'>
              <Loading
                selectedLetter={selectedLetter}
                text="LOADING DRINKS..."
                message={`NO DRINKS FOUND FOR ${selectedLetter}`}
              />
            </div>
          )
        )}

        {/* Renderizar el componente de paginación */}
        {drinks.length > drinksPerPage && (
          <Pagination page={page} setPage={setPage} isLastPage={isLastPage} />
        )}
         {/* Mostrar el mensaje si es la última página y no hay más productos */}
         {isLastPage && (
          <div className='endOfResults'>
            <p>There`s no more cocktails in this page</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ByLetter;