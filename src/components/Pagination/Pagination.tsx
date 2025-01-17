 
import './Pagination.scss'
import { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import { Product } from '../../types/Product';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
    productCountPerPage: number,
    productsFromServer: Product[]; 
    setProductsToShow: (products: React.SetStateAction<Product[]>) => void;
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;

}

export const Pagination: React.FC<Props> = ({ productCountPerPage, productsFromServer, searchParams, setSearchParams, setProductsToShow }) => {
  const [currentPage, setCurrentPage] = useState(0); 
  const [totalPages, setTotalPages] = useState(0);

  const sliceProductArray = useCallback((pageNumber: number) => {
    const startIndex = pageNumber * productCountPerPage;
    const endIndex = startIndex + productCountPerPage;

    setProductsToShow([...productsFromServer].slice(startIndex, endIndex));
  },[productCountPerPage, productsFromServer, setProductsToShow])

  useEffect(() => {
    const pages = Math.ceil(productsFromServer.length / productCountPerPage);
  
    setTotalPages(pages);
  }, [productsFromServer.length, productCountPerPage]);
  
  useEffect(() => {
    const pages = Math.ceil(productsFromServer.length / productCountPerPage);
    const page = searchParams.get('page');
  
    if (page) {
      if (+page >= pages) {
        setCurrentPage(pages - 1);
      } else {
        setCurrentPage(+page);
      }
    }
  }, [searchParams, productsFromServer.length, productCountPerPage]);
  
  useEffect(() => {
    // Обрізання масиву продуктів
    sliceProductArray(currentPage);
  }, [currentPage, sliceProductArray]);

  const handlePageClick = (data : {selected: number}) => {
    setCurrentPage(data.selected); 
    sliceProductArray(data.selected);
    searchParams.set('page',data.selected.toString());
    
    setSearchParams(searchParams);

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