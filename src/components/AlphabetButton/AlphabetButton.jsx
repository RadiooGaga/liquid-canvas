import React, { useState } from 'react';
import AlphabetSelector from '../AlphabetSelector/AlfabethSelector';
import './AlphabetButton.css';


const AlphabetButton = ({ onLetterClick }) => {

  const [alphabetVisible, setAlphabetVisible] = useState(false);

  const handleButtonClick = () => {
    setAlphabetVisible(prevState => !prevState);
  };

  return (
    <>
      <button className='showAlphabet' onClick={handleButtonClick}>
        {alphabetVisible ? 'HIDE ALPHABET' : 'SEARCH BY LETTER'}
      </button>
      {alphabetVisible && (
        <AlphabetSelector onLetterClick={onLetterClick} />
      )}
    </>
  );
};

export default AlphabetButton;

