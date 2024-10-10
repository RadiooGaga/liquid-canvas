import { useState, useEffect, useRef } from 'react';

export const useApi = ( query, searchType ) => {
  const [drinks, setDrinks] = useState([]);  // Estado para guardar los resultados de la API
  const [drink, setDrink ] = useState({});
  const [loading, setLoading] = useState(false);  // Estado para controlar el loading
  const [error, setError] = useState(null);  // Estado para controlar errores
  const dataCache = useRef({});  // Ref para almacenar el caché

    useEffect(() => {
        if (!query) {
            return
        }

        // Si ya hay datos en caché, los usamos
        if (dataCache.current[query]) {
            console.log('Usando datos de caché para:', query);
            setDrinks(dataCache.current[query].drinks || []);  
            // Actualizar el estado de la caché
            setDrink(dataCache.current[query].drink || {});
            return;
        }

        //console.log('Query:', query, 'Search Type:', searchType);
        setLoading(true);  
        let fetchUrl = '';

        //PETICIONES SEGÚN EL QUERY
        if (searchType === 'ByLetter') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
        } else if (searchType === 'ByLiquor') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);
        } else if (searchType === 'ById') {
        fetchUrl = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`);
        } 

        //la petición
        fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
            const fetchedData = data.drinks || [];
            setDrink(fetchedData[0])
            setDrinks(fetchedData); // Actualizar el estado con los datos obtenidos
            dataCache.current[query] = {
                drink: fetchedData[0],
                drinks: fetchedData
            } // Guardar los datos en la caché
            setLoading(false)
            console.log(dataCache.current[query])
        })
        .catch((err) => {
            console.error('Error al obtener los datos:', err);
            setError(err)
            setLoading(false)
        });
    }, [query, searchType]);


  return { drink, drinks, loading, error };
};