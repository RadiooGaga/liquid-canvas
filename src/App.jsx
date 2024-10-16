import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home';
import { ByLetter } from './pages/Searchby/ByLetter/ByLetter';
import { CocktailById } from './pages/Searchby/CocktailById/CocktailById';
import { ByLiquor } from './pages/Searchby/ByLiquor/ByLiquor';
import { RandomCocktails } from './pages/Searchby/RandomCocktails/Random'
import { About } from './pages/About/About';




export const App = () => {

  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails/:letter" element={<ByLetter />} />
          <Route path="/cocktail/:idDrink" element={<CocktailById />} />
          <Route path="/cocktails/liquor/:liquor" element={<ByLiquor/>} />{/* ¡NO MODIFICAR!!*/}
          <Route path="/cocktails" element={<RandomCocktails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  )
}


