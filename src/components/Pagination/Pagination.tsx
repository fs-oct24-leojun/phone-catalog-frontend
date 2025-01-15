 
import './Pagination.scss'
import { useEffect, useState } from 'react';
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
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(productsFromServer.length / productCountPerPage);

    setTotalPages(pages)
  },[productCountPerPage, productsFromServer.length]) 

  const handlePageClick = (data : {selected: number}) => {
    setCurrentPage(data.selected); 
    const startIndex = (data.selected) * productCountPerPage;
    const endIndex = startIndex + productCountPerPage;

    setProductsToShow([...productsFromServer].slice(startIndex, endIndex));
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
        initialPage={currentPage}
      />
    </div>
  )
} 