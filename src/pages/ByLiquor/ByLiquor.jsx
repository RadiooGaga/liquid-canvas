import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LiquorSelector from '../../components/LiquorSelector/LiquorSelector'
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading'
import './ByLiquor.css'

const ByLiquor= () => {

  const [selectedLiquor, setSelectedLiquor] = useState(null);//estado inicial null
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();
  const { liquor } = useParams(); //parámetro a que se modifica
  const [page, setPage] = useState(1);
  const drinksPerPage = 10;

  
  useEffect(() => {
    if (liquor) {
      setSelectedLiquor(liquor);
    }
  }, [liquor]);


  useEffect(() => {
    const fetchByLiquor = (liquor) => {
      console.log(liquor, "FETCH DEL LICOR");
      
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`)
        .then((res) => res.json()) // Convertimos la respuesta a JSON
        .then((data) => {
          console.log("RESPUESTA LICOR", data); // Imprimimos los datos correctamente
          setDrinks(data.drinks || []); // Si no hay bebidas, seteamos un array vacío
        })
        .catch((error) => console.error('sin datos:', error));
    };
  
    if (selectedLiquor) {
      fetchByLiquor(selectedLiquor);
    }
  }, [selectedLiquor]);

  
    const handleLiquorClick = (liquor) => {
      setSelectedLiquor(liquor);
      setPage(1);
      navigate(`/cocktails/liquor/${liquor}`)
    };

    const handleCocktailClick = (idDrink) => {
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
        <LiquorSelector onLiquorClick={handleLiquorClick}  />
        </div>
  
        <div className='liquorsDiv'>
          {drinks.length > 0 ? (
            currentDrinks.map((drink) => (
                <div key={drink.idDrink} className='cocktailCard '>
                <h2>{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} 
                alt={drink.strDrink}
                onClick={() => handleCocktailClick(drink.idDrink)} 
                />
                </div> 
            ))
          ) : (
                selectedLiquor && (
                  <div className='noDrinksFound'>
                    <Loading 
                    selectedLiquor={selectedLiquor}
                    text= "LOADING DRINKS..."
                    message={`NO DRINKS FOUND FOR ${selectedLiquor}`} />
                  </div>
                )
              )} 
             
              {drinks.length > drinksPerPage && (
              <Pagination page={page} setPage={setPage} isLastPage={isLastPage}/>
              )}   
               {isLastPage && (
                <div className='endOfResults'>
              <p>There`s no more cocktails in this page</p>
          </div>
        )}          
        </div>
    </>
  )
}

export default ByLiquor






















