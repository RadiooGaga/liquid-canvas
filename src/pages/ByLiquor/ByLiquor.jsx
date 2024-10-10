import React, { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../utils/useApi";
import { LiquorSelector } from '../../components/LiquorSelector/LiquorSelector'
import { SelectedDrinksSection } from '../../components/SelectedDrinksSection/SelectedDrinksSection';
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";


export const ByLiquor= () => {

  const { liquor } = useParams();
  const [selected, setSelected] = useState()
  const navigate = useNavigate();
  const drinksPerPage = 10;

  const { drinks, loading, error } = useApi(liquor, 'ByLiquor'); 

  if (loading) {
    <Loading text="Loading drinks..." message="Please wait..." />;
  }
  if (error) {
    <Error text='ERROR'/>;
  }

  const handleSelectionClick = useCallback((liquor) => {
    setSelected(liquor);
    navigate(`/cocktails/liquor/${liquor}`) // ¡NO MODIFICAR!!
  }, [navigate]);

  return (
    <>
        <LiquorSelector onLiquorClick={handleSelectionClick}  />
        <SelectedDrinksSection 
          drinks={drinks} 
          drinksPerPage={drinksPerPage}
          selected={selected}
        />  
    </>
  );
};




























