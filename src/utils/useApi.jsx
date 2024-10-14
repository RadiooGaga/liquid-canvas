import { useEffect, useReducer, useRef } from 'react';
import { INITIAL_STATE, reducer } from './useReducer';

export const useApi = ( query, searchType ) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const dataCache = useRef({});

    useEffect(() => {
        //Si no hay query, nos salimos.
        if (!query) {
            return
        }

        // Verificar si los datos están en caché
        if (dataCache.current[query]) {
            console.log('Usando datos de caché para:', query);
            dispatch({
              type: 'FETCH_SUCCESS',
              payload: {
                drinks: dataCache.current[query].drinks,
                drink: dataCache.current[query].drink,
                }, 
            });
            
            return;
        }
            
        // Iniciar la solicitud de datos
        dispatch({ type: 'FETCH_INIT' });

        let fetchUrl = '';

        //PETICIONES SEGÚN QUERY
        if (searchType === 'ByLetter') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
        } else if (searchType === 'ByLiquor') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);
        } else if (searchType === 'ById') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`);
        } else if (searchType === 'RandomCocktails') {
        fetchUrl = ('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        }

        //la respuesta según query
        fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
        const fetchedData = data.drinks || [];
        dataCache.current[query] = {
            drink: fetchedData[0],
            drinks: fetchedData,
            };
            dispatch({
            type: 'FETCH_SUCCESS',
            payload: { drinks: fetchedData, drink: fetchedData[0] },
            });
        })
        .catch((err) => {
            console.error('Error al obtener los datos:', err);
            dispatch({ type: 'FETCH_FAILURE', payload: err });
            });
        }, [query, searchType]);
        
    return { ...state };
};