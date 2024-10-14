import React from "react";
import './Pagination.css'

export const Pagination = ({ page, setPage, isLastPage }) => { 
  
  return (
    <div className="pagination">
      <button
        className="arrowButton"
        disabled={page === 1}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        {"<"}
      </button>
      <p>PAGE {page}</p>
      <button
        className="arrowButton"
        disabled={isLastPage}
        onClick={() => !isLastPage && setPage(page + 1)}
      >
        {">"}
      </button>
    </div>
     
  );
  
};

