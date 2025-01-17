import { useParams } from 'react-router-dom';
import { DropdownList } from '../../DropdownList/DropdownList';
import { Pagination } from '../../Pagination/Pagination';
import { Product } from '../../../types/Product';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard';
import { getProductsByCategory } from '../../../utils/api';
import { sortProducts } from '../../../utils/handleSortCatalog';
import { MAX_ITEMS_PER_CATEGORY } from '../../../utils/filterProducts';
import './CatalogPage.scss'
import { Back } from '../../Back/Back';
import { Crisps } from '../../Crisps/Crisps';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>('Sort by');
  const { category } = useParams();

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

  return (
    <div className="catalog-page">
      <Crisps />
      <Back />
      <div className="'catalog-page__headline-block headline-block">
        <h2 className="headline-block__headline headline headline--2">Mobile Phones</h2>
        <p className="headline-block__subtitle">{products.length} Models</p>
      </div>
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
      </div>
      <h1>Mobile Phones</h1>

      <div className="catalog-page__category category">
        {productsToShow.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <Pagination
        initialPage={0}
        productCountPerPage={MAX_ITEMS_PER_CATEGORY}
        productsFromServer={sortedProducts}
        setProductsToShow={setProductsToShow}
      />
    </div>
  );
};
