import {  useParams } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { getProductsByCategory } from '../../../utils/api';
import { MAX_ITEMS_PER_CATEGORY } from '../../../utils/filterProducts';
import { Crisps } from '../../Crisps/Crisps';
import { Back } from '../../Back/Back';
import './CatalogPage.scss'


export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const { category } = useParams();
  
  useEffect(()=>{
    if (category) {
      getProductsByCategory(category)
        .then(setProducts)
        .catch();
    }
  },[category])

  return(
    <div className="catalog-page">
      <Crisps />
      <Back />
      <div className="'catalog-page__headline-block headline-block">
        <h2 className="headline-block__headline headline headline--2">Mobile Phones</h2>
        <p className="headline-block__subtitle">{products.length} Models</p>
      </div>
      <div className="catalog-page__filters filters">
        <DropdownList description="Sort by"
          items={['Price: Low to High', 'Price: High to Low', 'Newest', 'Oldest']}
          onSelect={(selected) => console.log('Selected sort:', selected)} />
      </div>
      <div className="catalog-page__category category">
        {productsToShow
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      <Pagination initialPage={0} productCountPerPage={MAX_ITEMS_PER_CATEGORY} productsFromServer={products} setProductsToShow={setProductsToShow} /> 
    </div>
  )
};
