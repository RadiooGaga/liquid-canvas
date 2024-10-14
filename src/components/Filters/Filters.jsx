import React from 'react'
import { ByLetter } from '../../pages/Searchby/ByLetter/ByLetter'
import { ByLiquor } from '../../pages/Searchby/ByLiquor/ByLiquor'
import './Filters.css'

export const Filters = () => {

  return (
    
    <section className='filters'> 
        <ByLetter />
        <ByLiquor />
    </section>
  )
}

