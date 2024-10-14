import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from '../../../utils/useApi';
import { AlphabetButton } from '../../../components/AlphabetButton/AlphabetButton';
import { SelectedDrinksSection } from '../../../components/SelectedDrinksSection/SelectedDrinksSection';
import { Loading } from '../../../components/Loading/Loading';
import { Error } from '../../../components/Error/Error';

export const ByLetter = () => {

  const { letter } = useParams();
  const [selected, setSelected] = useState()
  const navigate = useNavigate();
  const drinksPerPage = 10;

  const { drinks, loading, error } = useApi(letter, 'ByLetter'); 

  const handleSelectionClick = (letter) => {
    setSelected(letter);
    navigate(`/cocktails/${letter}`)
  };


  return (
    <>
      <AlphabetButton onLetterClick={handleSelectionClick} />
      {loading ? (
        <Loading
          loading={loading}
          selected={selected}
          text="LOADING DRINKS..."
          message={`NO DRINKS FOUND FOR ${selected}`}
        />
      ) : error ? (
        <Error text='ERROR'/>
      ) : (
        <SelectedDrinksSection 
          drinks={drinks} 
          drinksPerPage={drinksPerPage}
          selected={selected}
        />
      )}
    </>
  );
};


