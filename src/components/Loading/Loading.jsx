import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = ({  selectedLetter, selectedLiquor, text, message }) => {
  const [loading, setLoading] = useState(true);
  const [noDrinks, setNoDrinks] = useState(false);

  useEffect(() => {
    if (selectedLetter || selectedLiquor) {
      setLoading(true);
      setNoDrinks(false);

      // Cargando...
      const timeout = setTimeout(() => {
        setLoading(false);
        // Se asume que no hay bebidas si ha pasado el tiempo de carga
        setNoDrinks(true); 
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [selectedLetter, selectedLiquor]);

  return (
    <div>
      {loading ? (
        <div className='loading'>{text}</div>
      ) : noDrinks ? (
        <div className='noDrinksFound'>
          {message.toUpperCase()} 
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
