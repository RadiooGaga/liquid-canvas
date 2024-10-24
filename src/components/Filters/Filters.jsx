import React from 'react'
import { ByLetter } from '../../pages/Searchby/ByLetter'
import { ByLiquor } from '../../pages/Searchby/ByLiquor'
import './Filters.css'

export const Filters = () => {

  return (
    
    <section className='filters'> 
        <ByLetter />
        <ByLiquor />
    </section>
  )
}

