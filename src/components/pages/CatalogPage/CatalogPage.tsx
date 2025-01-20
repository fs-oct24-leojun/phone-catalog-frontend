/* eslint-disable max-len */
import { useParams, useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith} from '../../../utils/SearchHelper';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import { Product } from '../../../types/Product';
import {
  useEffect, useState, useMemo 
} from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { getProductsByCategory } from '../../../utils/apiHelper';
import { sortProducts } from '../../../utils/SortHelper';
import { Back } from '../../Back/Back';
import { Crisps } from '../../Crisps/Crisps';
import { SortTypes } from '../../../types/SortTypes';
import './CatalogPage.scss'
import { SearchBar } from '../../SearchBar/SearchBar';
import { EmptyCartPage } from '../EmptyCartPage/EmptyCartPage';
import { COUNT_ON_PAGE } from '../../../types/CountTypes';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(16);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string>('Sort by');

  const { category } = useParams();


  const query = searchParams.get('query');


  useEffect(() => {
    if (category) {
      getProductsByCategory(category).then((fetchedProducts) => {
        setProducts(fetchedProducts);
        setSelectedSort('Sort by');
      });
    }
  }, [category]);

  const updateSearchParams = (updatedParams: SearchParams) => {
    const newParams = getSearchWith(searchParams, updatedParams);

    setSearchParams(newParams);
  };

  const sortedProducts = useMemo(() => {
    const selected = searchParams.get('sortOrder') || '';

    return sortProducts(products, selected as SortTypes).filter(product => {
      if(query) {
        return product.name.toLowerCase().includes(query.toLowerCase());
      }
  
      return true;
    });
  }, [products, query, searchParams]);
  
  return(
    <div className="catalog-page">
      <Crisps />
      <Back />
      <div className="'catalog-page__headline-block headline-block">
        <h2 className="headline-block__headline headline headline--2">{category}</h2>
        <p className="headline-block__subtitle">{products.length} Models</p>
      </div>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
      <div className="catalog-page__filters filters">
        <DropdownList
          description="Sort by"
          items={Object.values(SortTypes)}
          selected={selectedSort}
          onSelect={(selected) => {
            setSelectedSort(selected);
            updateSearchParams({sortOrder: selected});
          }} />
        <DropdownList description="Items on page"
          items={COUNT_ON_PAGE}
          selected={`${itemsOnPage}`}
          onSelect={(selected) => {
            setItemsOnPage(+selected);
          } } /> 
      </div>
      {sortedProducts.length > 0 ? 
        <><div className="catalog-page__category category">
          {productsToShow.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div><Pagination
          productCountPerPage={itemsOnPage}
          productsFromServer={sortedProducts}
          setProductsToShow={setProductsToShow}
          searchParams={searchParams}
          setSearchParams={setSearchParams} /> 
        
        </> : <EmptyCartPage />}
    </div>
  )
};
