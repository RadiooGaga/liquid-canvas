import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../../utils/useApi";
import { LiquorSelector } from '../../../components/LiquorSelector/LiquorSelector';
import { SelectedDrinksSection } from '../../../components/SelectedDrinksSection/SelectedDrinksSection';
import { Loading } from '../../../components/Loading/Loading';
import { Error } from '../../../components/Error/Error';


export const ByLiquor= () => {

  const { liquor } = useParams();
  const [selected, setSelected] = useState()
  const navigate = useNavigate();
  const drinksPerPage = 10;

  const { drinks, loading, error } = useApi(liquor, 'ByLiquor');


  const handleSelectionClick = (liquor) => {
    setSelected(liquor);
    navigate(`/cocktails/liquor/${liquor}`) 
  };

  
  return (
    <>
        <LiquorSelector onLiquorClick={handleSelectionClick}  />
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




























