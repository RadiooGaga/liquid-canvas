import React from 'react'
import { ByLetter } from '../../pages/Searchby/ByLetter'
import { ByCategory } from '../../pages/Searchby/ByCategory'
import { ByLiquor } from '../../pages/Searchby/ByLiquor'
import './Filters.css'

export const Filters = () => {

  return (
    
    <section className='filters'> 
        <ByLetter />
        <ByCategory />
        <ByLiquor />
    </section>
  )
}

