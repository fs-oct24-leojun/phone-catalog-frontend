import {  useParams } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import productsFromServer from './../../../../public/api/products.json'
import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import './CatalogPage.scss'


export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const productType = useParams();
  
  useEffect(()=>{
    const getPhonesFromServer = productsFromServer.filter((product: Product) => product.category === productType.productType);
    
    setProducts(getPhonesFromServer);
  },[productType.productType])

  return(
    <>
      <h1>Mobile Phones</h1>
      <DropdownList description="Sort by"
        items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
        onSelect={(selected) => console.log('Selected sort:', selected)} />
      <div className="product-page">
        {productsToShow
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      <Pagination initialPage={0} productCountPerPage={16} productsFromServer={products} setProductsToShow={setProductsToShow} /> 
    </>
  )
};
