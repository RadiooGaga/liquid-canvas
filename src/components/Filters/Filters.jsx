import React from 'react'
import { ByLetter } from '../../pages/ByLetter/ByLetter'
import { ByLiquor } from '../../pages/ByLiquor/ByLiquor'
import './Filters.css'

export const Filters = () => {

  return (
    
    <section className='filters'> 
        <ByLetter />
        <ByLiquor />
    </section>
  )
}

