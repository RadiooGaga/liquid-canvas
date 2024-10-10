import React from 'react'
import './About.css'

export const About = () => {
  return (

    <section className='aboutCard'>
      <h2>ABOUT THIS PAGE</h2>
      <br />
      <div className='languageDiv'>
        <img className='language' src="/assets/pics/english.png" alt="english" />
      </div>
      <article className='paragraph'>
        <p className='english'>If you're here, it's because you're not satisfied with just a mixed drink.
          <br />
          <br />
          Because, let's face it, you're now a connoisseur. You're now a gentleman or a lady of distinction. Now we appreciate, savor (and control the amount) of alcohol we consume. We look at the glass, smell what's inside, and the more colorful it is, the more we like it.
          <br />
          <br />
          On this website, you can search through hundreds of cocktails in all colors and flavors. You can search by alphabetical order, by type of liquor, and you can even take a chance and let fate decide which cocktail you'll make, as in the random cocktail section, you'll find one at random!
          <br />
          <br />
          Good luck!
          <br />
          <br />
          <br />
          This website was created for project number 11 (react basics), in which i designed a cocktail recipe website.
          The data and images presented here, regarding the cocktails that appear on the website, are sourced from the free api www.thecocktaildb.com/api.php.
        </p>
      </article>

      <div className='languageDiv'>
        <img className='language' src="/assets/pics/spanish.png" alt="spanish" />
      </div>
      <article className='paragraph'>
        <p className='spanish'>Si estás aquí, es porque no te conformas con el cubata. 
          <br />
          <br />
          Porque, reconócelo, ahora eres un sibarita.
          Ya eres un señor o una señora mayor. Ya apreciamos, saboreamos (y controlamos las cantidades) 
          de alcohol que le echamos al cuerpo. Miramos el vaso, olemos, y cuanto más 
          colorines, más nos gusta.
          <br />
          <br />
          En esta web, podrás buscar entre cientos de cócteles de todos los colores y sabores.
          Podrás buscar por orden alfabético, por tipo de licor e incluso podrás jugar a echarl a suertes
          el cóctel que te toca preparar, ya que en la coctelería random encontrarás uno al azar!
          <br />
          <br />
          Buena suerte!
          <br />
          <br />
          <br />
          Es una página creada para el proyecto número 11 (react basics), en el que
          he diseñado una web de recetas de cócteles.
          Los datos e imágenes que aquí presento referente a los cócteles que aparecen en la web,
          están sacados de la free api www.thecocktaildb.com/api.php

        </p>
        
      </article>
      
    </section>
  )
}


