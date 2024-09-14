import React from 'react'
import './Filters.css'
import ByLetter from '../../pages/ByLetter/ByLetter'
import ByLiquor from '../../pages/ByLiquor/ByLiquor'

const Filters = () => {


  return (
    
    <div className='filters'> 
        <ByLetter />
        <ByLiquor />
    </div>
  )
}

export default Filters