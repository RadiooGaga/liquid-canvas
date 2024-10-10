import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './LiquorSelector.css';

export const LiquorSelector = ({ onLiquorClick }) => {
  const [liquors, setLiquors] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  // Cargando la lista de licores desde la API
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((data) => {
        const sortedLiquors = (data.drinks || []).sort((a, b) =>
          a.strIngredient1.localeCompare(b.strIngredient1)
        );
        setLiquors(sortedLiquors);
      })
      .catch((error) => {
        console.error('Error fetching liquors:', error);
      });
  }, []);


  // Convierto licores a opciones para el Select
  const options = liquors.map((liquor) => ({
    value: liquor.strIngredient1,
    label: liquor.strIngredient1,
  }));

  
  // Manejo el cambio en el selector
  const handleLiquorChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (onLiquorClick) {
      onLiquorClick(selectedOption.value); // Pasa el valor al callback
    }
  };

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






