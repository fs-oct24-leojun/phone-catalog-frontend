 
import { useParams, useSearchParams } from 'react-router-dom';
import { SearchParams, getSearchWith } from '../../../utils/searchHelper';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import { Product } from '../../../types/Product';
import {
  useEffect, useState, useMemo, useContext 
} from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { getProductsByCategory } from '../../../utils/apiHelper';
import { sortProducts } from '../../../utils/SortHelper';
import { Back } from '../../Back/Back';
import { Crisps } from '../../Crisps/Crisps';
import { SortTypes } from '../../../types/SortTypes';
import './CatalogPage.scss';
import { SearchBar } from '../../SearchBar/SearchBar';
import { COUNT_ON_PAGE } from '../../../types/CountTypes';
import { EmptyFavouritesPage } from '../ServicePages/EmptyFavouritesPage/EmptyFavouritesPage';
import { NotificationContext } from '../../../context/NotificationContext';
import { Loader } from '../../Loader/Loader';
import { ErrorType } from '../../../types/ErrorType';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(16);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string>('Sort by');
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const { showNotification } = useContext(NotificationContext);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (category) {
      getProductsByCategory(category)
        .then((fetchedProducts) => {
          setIsLoading(true);
          setProducts(fetchedProducts);
          setSelectedSort('Sort by');
        })
        .catch((error) =>
          showNotification(
            `${ErrorType.NO_PRODUCTS} ${error.message}`,
            'error',
          ),
        );
    }

    setIsLoading(false);
    console.log('done');
  }, [category, showNotification]);

  const updateSearchParams = (updatedParams: SearchParams) => {
    const newParams = getSearchWith(searchParams, updatedParams);

    setSearchParams(newParams);
  };

  const sortedProducts = useMemo(() => {
    const selected = searchParams.get('sortOrder') || '';

    return sortProducts(products, selected as SortTypes, query);
  }, [products, query, searchParams]);

  return (
    <div className="catalog-page">
      <Crisps />
      <Back />
      <div className="'catalog-page__headline-block headline-block">
        <h2 className="headline-block__headline headline headline--2">
          {category}
        </h2>
        <p className="headline-block__subtitle">{products.length} Models</p>
      </div>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="catalog-page__filters filters">
        <DropdownList
          description="Sort by"
          items={Object.values(SortTypes)}
          selected={selectedSort}
          onSelect={(selected) => {
            setSelectedSort(selected);
            updateSearchParams({ sortOrder: selected });
          }}
        />
        <DropdownList
          description="Items on page"
          items={COUNT_ON_PAGE}
          selected={`${itemsOnPage}`}
          onSelect={(selected) => {
            setItemsOnPage(+selected);
          }}
        />
      </div>
      {!isLoading ?
        <Loader />
        : sortedProducts.length > 0 ?
          <>
            <div className="catalog-page__category category">
              {productsToShow.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
            <Pagination
              productCountPerPage={itemsOnPage}
              productsFromServer={sortedProducts}
              setProductsToShow={setProductsToShow}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </>
          : <EmptyFavouritesPage />}
    </div>
  );
};
