import React, {useEffect, useState} from 'react';
import './Loading.css';

export const Loading = ({  loading, selected, text, message }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setIsLoading(false); 
      }, 1500); 

      return () => clearTimeout(timer); 
    }
  }, [loading]);

  return (
  <div>
      {isLoading ? ( 
        <div className='loading'>{text}</div>
      ) : (
        selected && ( 
          <div className='noDrinksFound'>
            {message.toUpperCase()} 
          </div>
        )
      )}
    </div>
  );
};


