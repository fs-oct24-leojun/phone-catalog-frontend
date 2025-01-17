import { useParams, useSearchParams } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { getProductsByCategory } from '../../../utils/api';
import { sortProducts } from '../../../utils/handleSortCatalog';
import { MAX_ITEMS_PER_CATEGORY } from '../../../utils/filterProducts';
import { SearchBar } from '../../SearchBar/SearchBar';
import { Crisps } from '../../Crisps/Crisps';
import { Back } from '../../Back/Back';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(16);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string>('Sort by');
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  const { category } = useParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (category) {
      getProductsByCategory(category).then((fetchedProducts) => {
        setProducts(fetchedProducts);
        setSortedProducts(fetchedProducts);
        setSelectedSort('Sort by');
      });
    }
  }, [category]);

  const handleSort = (selected: string) => {
    const sorted = sortProducts(products, selected);

    setSortedProducts(sorted);
    setProductsToShow(sorted.slice(0, MAX_ITEMS_PER_CATEGORY));
  };



  useEffect(()=>{
    setProductsToShow([...products].filter(product => {
      if(query) {
        return product.name.toLowerCase().includes(query.toLowerCase());
      }
  
      return true;
    }));

  },[products, query]);

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
          items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
          selected={selectedSort}
          onSelect={(selected) => {
            setSelectedSort(selected);
            handleSort(selected);
          }}
        />
        <DropdownList description="Items on page"
          items={[16, 8, 4, 2]}
          onSelect={(selected) => {
            setItemsOnPage(+selected);
          } } /> 
      </div>
      <div className="catalog-page__category category">
        
        {productsToShow
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      <Pagination productCountPerPage={itemsOnPage} productsFromServer={sortedProducts} setProductsToShow={setProductsToShow} searchParams={searchParams} setSearchParams = {setSearchParams}/> 
    </div>
  )
};