import { useParams, useSearchParams } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import productsFromServer from './../../../../public/api/products.json'
import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import './CatalogPage.scss'
import { Crisps } from '../../Crisps/Crisps';
import { SearchBar } from '../../SearchBar/SearchBar';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [itemsOnPage, setItemsOnPage] = useState<number>(16);
  const [searchParams, setSearchParams] = useSearchParams();

  const productType = useParams();

  const query = searchParams.get('query');

  useEffect(()=>{
    const getPhonesFromServer = productsFromServer.filter((product: Product) => product.category === productType.productType);

    setProducts(getPhonesFromServer);

  },[productType.productType]);


  useEffect(()=>{
    setProductsToShow([...products].filter(product => {
      if(query) {
        return product.name.toLowerCase().includes(query.toLowerCase());
      }
  
      return true;
    }));

  },[products, query]);

  return(
    <>
      <Crisps />
      <h1>Mobile Phones</h1>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
      <div className="dropdowns-container">
        <DropdownList description="Sort by"
          items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
          onSelect={(selected) => console.log('Selected sort:', selected)} />
        <DropdownList description="Items on page"
          items={[16, 8, 4, 2]}
          onSelect={(selected) => {
            setItemsOnPage(+selected);
          }} /> 
      </div>
      <div className="product-page">
        
        {productsToShow
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      <Pagination productCountPerPage={itemsOnPage} productsFromServer={products} setProductsToShow={setProductsToShow} searchParams={searchParams} setSearchParams = {setSearchParams}/> 
    </>
  )
};
