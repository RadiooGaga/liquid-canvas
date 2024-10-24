import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import { useApi } from '../../utils/useApi';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import './LiquorSelector.css';


export const LiquorSelector = ({ onLiquorClick }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const { drinks, loading, error } = useApi('list', 'ListOfLiquors'); 

  const handleLiquorChange = useCallback((selectedOption) => {
    setSelectedOption(selectedOption);
    if (onLiquorClick) {
      onLiquorClick(selectedOption.value);
    }
  }, [onLiquorClick]);


   // Opciones para el Select (ya ordenadas)
   const options = (drinks || [])
   .sort((a, b) => a.strIngredient1.localeCompare(b.strIngredient1)) 
   .map((liquor) => ({
     value: liquor.strIngredient1,
     label: liquor.strIngredient1,
   }));

 if (loading) return <Loading text="LOADING LIQUORS" />;
 if (error) return <Error text='ERROR FETCHING LIQUORS' />;

  return (
    <div className='filters'>
      <Select 
        className='liquorsSelector'
        options={options}
        value={selectedOption}
        onChange={handleLiquorChange}
        placeholder="SEARCH BY INGREDIENT"
      />
    </div>
  );
};






