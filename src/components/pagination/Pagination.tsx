import React, {FC} from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
    activePage: number
}

const Pagination: FC<PaginationProps> = ({ pageCount, onPageChange, activePage }) => {
    return (
        <div className="flex items-center justify-center mt-4 space-x-4 bg-base-100">
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                breakClassName="break-me text-primary"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={onPageChange}
                containerClassName="pagination flex space-x-4"
                pageClassName="text-primary cursor-pointer"
                previousClassName="text-primary cursor-pointer"
                nextClassName="text-primary cursor-pointer"
                activeClassName="text-accent"
                disabledClassName="text-gray-300 cursor-not-allowed"
                forcePage={activePage}
            />
        </div>
    );
};

export default Pagination;
