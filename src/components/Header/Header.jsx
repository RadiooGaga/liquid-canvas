import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    
  return (
    <header>
        <section className='sectionLogo'>
        <img src="/assets/pics/LiquidCanvasLogo.png" alt="logo" />
        </section>
        <section className='brand'>
            <h1>LIQUID CANVAS</h1>
            <p>art and color in every sip</p>
        </section>
        <nav>
            <ul className='menu'>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : "" }>HOME</NavLink >
                </li>
                <li>
                    <NavLink to="/cocktails" className={({isActive}) => isActive ? "active" : "" }>RANDOM COCKTAIL</NavLink >
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active" : "" }>ABOUT</NavLink >
                </li>
                
                
            </ul>
        </nav>
    </header>   
  )
}

export default Header