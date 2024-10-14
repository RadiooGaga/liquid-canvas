import React, { useCallback, useState } from 'react';
import { AlphabetSelector } from '../AlphabetSelector/AlfabethSelector';
import './AlphabetButton.css';


export const AlphabetButton = ({ onLetterClick }) => {

  const [alphabetVisible, setAlphabetVisible] = useState(false);

  const handleButtonClick = useCallback(() => {
    setAlphabetVisible(prevState => !prevState);
  });

  return (
    <div className='filters'>
      <button className='showAlphabet' onClick={handleButtonClick}>
        {alphabetVisible ? 'HIDE ALPHABET' : 'SEARCH BY LETTER'}
      </button>
      {alphabetVisible && (
        <AlphabetSelector onLetterClick={onLetterClick} />
      )}
    </div>
  );
};



