import { useEffect, useReducer, useRef } from 'react';
import { INITIAL_STATE, reducer } from './useReducer';

export const useApi = ( query, searchType, randomTrigger ) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const dataCache = useRef({});

    useEffect(() => {
        // Si no hay query y no es tipo 'Random', nos salimos.
        if (searchType !== 'Random' && !query) {
        return;
        }
     
        const getFetchUrl = (searchType, query) => {
            const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
            switch (searchType) {
                case 'ByLetter':
                    return `${baseUrl}search.php?f=${query}`;
                case 'ByLiquor':
                    return `${baseUrl}filter.php?i=${query}`;
                case 'ById':
                    return `${baseUrl}lookup.php?i=${query}`;
                case 'Random':
                    return `${baseUrl}random.php`;
                case 'ListOfLiquors':
                    return `${baseUrl}list.php?i=list`;
                default:
                    console.error('Tipo de búsqueda no válido:', searchType);
                    return null;
            }
        };

        // Obtener la URL y si no hay, salimos
        const fetchUrl = getFetchUrl(searchType, query);
        if (!fetchUrl) {
            return; 
        }

        // clave única para la caché
        const cacheKey = `${searchType}-${query}`;

      
        // Verifico si los datos están en caché (excepto para búsquedas aleatorias)
        if (searchType !== 'Random' && dataCache.current[cacheKey]) {
            console.log('Usando datos de caché para:', cacheKey);
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    drinks: dataCache.current[cacheKey].drinks,
                    drink: dataCache.current[cacheKey].drink,
                }, 
            });
            
            return;
        }

        // Iniciar la solicitud de datos
        dispatch({ type: 'FETCH_INIT' });

        // respuesta según query
        fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
        const fetchedData = data.drinks || [];
          // Guardar en caché si no es una búsqueda aleatoria
          if (searchType !== 'Random') {
            dataCache.current[cacheKey] = {
                drink: fetchedData[0],
                drinks: fetchedData,
            };
        }
            dispatch({
            type: 'FETCH_SUCCESS',
            payload: { drinks: fetchedData, drink: fetchedData[0] },
            });
        })
        .catch((err) => {
            console.error('Error al obtener los datos:', err);
            dispatch({ type: 'FETCH_FAILURE', payload: err });
            });
    }, [query, searchType, randomTrigger]);
        
    return { ...state };
};