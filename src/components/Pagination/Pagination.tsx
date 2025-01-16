 
import './Pagination.scss'
import { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import { Product } from '../../types/Product';

type Props = {
    initialPage: number,
    productCountPerPage: number,
    productsFromServer: Product[]; 
    setProductsToShow: (products: React.SetStateAction<Product[]>) => void;

}

export const Pagination: React.FC<Props> = ({ productCountPerPage, productsFromServer, initialPage, setProductsToShow }) => {
  const [currentPage, setCurrentPage] = useState(initialPage || 0); 
  const [totalPages, setTotalPages] = useState(0);

  const sliceProductArray = useCallback((pageNumber: number) => {
    const startIndex = pageNumber * productCountPerPage;
    const endIndex = startIndex + productCountPerPage;

    setProductsToShow([...productsFromServer].slice(startIndex, endIndex));
  },[productCountPerPage, productsFromServer, setProductsToShow])

  useEffect(() => {
    const pages = Math.ceil(productsFromServer.length / productCountPerPage);

    setCurrentPage(0);
    sliceProductArray(initialPage);
    setTotalPages(pages);
  },[initialPage, productCountPerPage, productsFromServer.length, sliceProductArray]) 

  const handlePageClick = (data : {selected: number}) => {
    setCurrentPage(data.selected); 

    sliceProductArray(data.selected);

  }

  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={totalPages} 
        marginPagesDisplayed={1} 
        pageRangeDisplayed={3} 
        onPageChange={handlePageClick} 
        containerClassName={"pagination"} 
        pageClassName={"pagination-item  button--secondary button--disabled button button--round"}
        previousClassName={"pagination-item--switch button--secondary button button--round"} 
        previousLinkClassName={"pagination-item-link"}
        pageLinkClassName={"pagination-item-link"} 
        nextClassName={" pagination-item--switch button--secondary button button--round "} 
        nextLinkClassName={"pagination-item-link"} 
        breakClassName={"pagination-item"} 
        breakLinkClassName={"pagination-link"} 
        activeClassName={"pagination-item--active"} 
        disabledClassName={"pagination-item--disabled"} 
        forcePage={currentPage}
      />
    </div>
  )
} 