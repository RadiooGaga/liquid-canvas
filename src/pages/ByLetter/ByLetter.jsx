import React, {useState, useCallback, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../utils/useApi";
import { AlphabetButton } from '../../components/AlphabetButton/AlphabetButton';
import { SelectedDrinksSection } from '../../components/SelectedDrinksSection/SelectedDrinksSection';
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";


export const ByLetter= () => {

  const { letter } = useParams();
  const [selected, setSelected] = useState()
  const navigate = useNavigate();
  const drinksPerPage = 10;

  const { drinks, loading, error } = useApi(letter, 'ByLetter'); 

  if (loading) {
    <Loading
    selected={selected}
    text="LOADING DRINKS..."
    message={`NO DRINKS FOUND FOR ${selected}`}
  />;
  }

  if (error) {
    <Error text='ERROR'/>;
  }

  const handleSelectionClick = useCallback((letter) => {
    setSelected(letter);
    navigate(`/cocktails/${letter}`)
  }, [navigate]);


  return (
    <>
        <AlphabetButton onLetterClick={handleSelectionClick}  />
        <SelectedDrinksSection 
          drinks={drinks} 
          drinksPerPage={drinksPerPage}
          selected={selected}
        />  
    </>
  );
};

