import React from "react";
import { useState } from "react";

import React from 'react'

const Pagination = ({ page, setPage }) => {
    
  return (
    <div className="pagination">

        <button 
        disabled={page === 1}
        onClick={() => page > 1 && setPage(page -1)}>{"<"}
        </button>
        <p>PAGE</p>
        <button 
        disabled={page === 20}
        onClick={() => page < 20 && setPage(page +1)}>{">"}
        </button>
    
    </div>
  )
}

export default Pagination