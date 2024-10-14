import React, { useEffect, useState } from 'react';
import './Loading.css';

export const Loading = ({ loading, selected, text, message }) => {
  const [showNoDrinksMessage, setShowNoDrinksMessage] = useState(false);

  useEffect(() => {
    if (loading) {
      setShowNoDrinksMessage(false);
    } else {
      if (!selected) return; //no hacemos nada si no hay seleccionados
      // y no hay resultados después de cargar
      setShowNoDrinksMessage(true);
    }
  }, [loading, selected]);

  return (
    <div>
      {loading ? ( 
        <div className='loading'>{text}</div>
      ) : (
        showNoDrinksMessage && (
          <div className='noDrinksFound'>
            {message.toUpperCase()} 
          </div>
        )
      )}
    </div>
  );
};


