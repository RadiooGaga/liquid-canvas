import React, { useCallback, useMemo, useState } from 'react';
import Select from 'react-select';
import { useApi } from '../../utils/useApi';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import './Selector.css';

export const Selector = ({ onClick, endpoint, searchType }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { drinks, loading, error } = useApi({
    endpoint: endpoint,
    searchType: searchType,
  });

  const options = useMemo(() => {
    if (!drinks) return [];

    if (searchType === 'ListOfLiquors' && endpoint === 'list.php?i=list') {
      return drinks
        .map((liquor) => ({
          value: liquor.strIngredient1,
          label: liquor.strIngredient1,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    }

    if (searchType === 'ListOfCategories' && endpoint === 'list.php?c=list') {
      return drinks
        .map((liquor) => ({
          value: liquor.strCategory,
          label: liquor.strCategory,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    }

    return [];
  }, [drinks, searchType, endpoint]);


  const handleChange = useCallback((selectedOption) => {
    setSelectedOption(selectedOption);
    if (onClick) {
      onClick(selectedOption.value);
    }
  }, [onClick]);


  const placeholderText =
  searchType === 'ListOfLiquors' ? 'LIQUOR' : 'CATEGORY';

  if (loading) return <Loading text="LOADING OPTIONS" />;
  if (error) return <Error text='ERROR FETCHING OPTIONS' />;

  return (
    <div className='filters'>
      <Select 
        className='filtersSelector'
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholderText}  

      />
    </div>
  );
};