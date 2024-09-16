import React from 'react';
import './GoBackButton.css';

const GoBackButton = () => {

    function goBack() {
        window.history.back();
    }

    return (
        <>
        <button className='goBack' onClick={goBack}> 
        <img 
        className='leftArrow' 
        src="/assets/pics/flecha-izquierda.png" 
        alt="arrowEmoji" 
        />  BACK</button>
      </>
    );
}

export default GoBackButton;