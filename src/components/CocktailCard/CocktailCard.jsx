import React from 'react';
import './CocktailCard.css'

export const CocktailCard = ({ drink, onClick }) => {
    return (
        <div className='cocktailCard' onClick={onClick}>
            <h2>{drink.strDrink}</h2>
            <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
            />
        </div>
    );
};