import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ByLetter from './pages/ByLetter/ByLetter';
import CocktailById from './pages/CocktailById/CocktailById';
import RandomCocktails from './pages/RandomCocktails/Random'
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ByLiquor from './pages/ByLiquor/ByLiquor';



const App = () => {

  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails/:letter" element={<ByLetter />} />
          <Route path="/cocktail/:idDrink" element={<CocktailById />} />
          <Route path="/cocktails/liquor/:liquor" element={<ByLiquor/>} />
          <Route path="/cocktails" element={<RandomCocktails />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
  )
}

export default App