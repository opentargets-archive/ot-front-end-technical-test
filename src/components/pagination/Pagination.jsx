import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, setPage }) => {
    return (
        <>
            <button className={style.paginationBtn}
                    disabled={currentPage === 0}
                    onClick={() => {setPage(currentPage - 1)}}>
                Prev
            </button>
            {currentPage + 1} of {totalPages}
            <button className={style.paginationBtn}
                             disabled={currentPage === totalPages - 1}
                             onClick={() => {setPage(currentPage + 1)}}>
                Next
            </button>
        </>
    )
};

export default Pagination;
