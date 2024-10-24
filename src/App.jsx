import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home';
import { Random } from './pages/Searchby/Random';
import { About } from './pages/About/About';
import { ByLetter } from './pages/Searchby/ByLetter';
import { LiquorSelector } from './components/LiquorSelector/LiquorSelector';
import { ByLiquor } from './pages/Searchby/ByLiquor';
import { CocktailById } from './pages/Searchby/CocktailById';



export const App = () => {

  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Random />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails/:letter" element={<ByLetter />} />
          <Route path="/cocktails/liquor/:liquor" element={<ByLiquor/>} />
          <Route path="/liquors/:list" element={<LiquorSelector />} />
          <Route path="/cocktail/:idDrink" element={<CocktailById />} />      
        </Routes>
      </div>
  )
}


