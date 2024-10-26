import { useEffect, useReducer, useRef } from 'react';
import { INITIAL_STATE, reducer } from './useReducer';

export const useApi = ({ endpoint, searchType, randomTrigger, url }) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const dataCache = useRef({});

    useEffect(() => {

        const apiUrl = import.meta.env.VITE_API_URL;
        const urlFetch = url ? url : `${apiUrl}${endpoint}`;
        const cacheKey = `${searchType}-${endpoint}`;

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

        dispatch({ type: 'FETCH_INIT' }); // Inicio de solicitud de datos

        fetch(urlFetch)    // respuesta según peticion
        .then((res) => res.json())
        .then((data) => {
        const fetchedData = Array.isArray(data.drinks) ? data.drinks : [];
        console.log(fetchedData)
          if (searchType !== 'Random') { // Guardo en caché si el tipo no es búsqueda aleatoria
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

    }, [endpoint,searchType, randomTrigger, url]);
        
    return { ...state };
};





