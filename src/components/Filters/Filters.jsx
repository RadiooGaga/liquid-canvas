import React from 'react'
import './Filters.css'
import ByLetter from '../../pages/ByLetter/ByLetter'
import ByLiquor from '../../pages/ByLiquor/ByLiquor'

const Filters = () => {

  return (
    
    <section className='filters'> 
        <ByLetter />
        <ByLiquor />
    </section>
  )
}

export default Filters