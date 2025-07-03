import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../utils/useApi";
import { Selector } from "../../components/Selector/Selector";
import { SelectedDrinksSection } from "../../components/SelectedDrinksSection/SelectedDrinksSection";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

export const ByCategory= () => {

  const { liquor} = useParams();
  const decodedLiquor = decodeURIComponent(liquor);
  const [selected, setSelected] = useState()
  const navigate = useNavigate();
  const drinksPerPage = 10;

  const { drinks, loading, error } = useApi({
    endpoint:`filter.php?c=${decodedLiquor}`, 
    searchType:'ByCategory' 
  }); 

  const handleSelectionClick = (endpoint) => {
    setSelected(endpoint);
    navigate(`/cocktails/category/${encodeURIComponent(endpoint)}`) 
  };

  
  return (
    <>
      <Selector
        onClick={handleSelectionClick}
        endpoint="list.php?c=list"
        searchType="ListOfCategories"
      />

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