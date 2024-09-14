import React from 'react';
import './AlphabetSelector.css';

const AlphabetSelector = ({ onLetterClick }) => {

  const firstLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className='abcSelectorDiv'>
      {firstLetter.map((letter) => (
          <button 
          className='buttonLetter' 
          key={letter} 
          onClick={() => onLetterClick(letter)}>{letter}</button>
      ))}
    </div>
  );
};

export default AlphabetSelector;
