import { Product } from '../types/Product';
import { ProductExtended } from '../types/ProductsExtended';
import { getProducts } from './api';

const MAX_ITEMS_PER_CATEGORY = 10;

export const getHotPrices = ( products: Product[]) => {
  return products.filter(product => product.priceDiscount !== product.priceRegular)
    .slice(0, MAX_ITEMS_PER_CATEGORY);
};

export const getNewestModels = ( products: Product[]) => {
  const currentYear = new Date().getFullYear();

  return products.filter(product => currentYear - product.year <= 3 )
    .slice(0, MAX_ITEMS_PER_CATEGORY);
};

export const getRecommendation = (originalProduct: Product) => {
  return getProducts().then((products: Product[]) => 
    products.filter(product =>
      product.category === originalProduct.category
      && (product.capacity === originalProduct.capacity ||
        product.ram === originalProduct.ram ||
        product.screen === originalProduct.screen
      )
    ).slice(0, MAX_ITEMS_PER_CATEGORY)
  );
};

export const getByColorAndCapacity = (products: ProductExtended[], color: string, capacity: string) => {
  const product = products.find(
    (prod: ProductExtended) => prod.color === color
    && prod.capacity === capacity);

  const id = product ? product.id : '';

  return id;
};
