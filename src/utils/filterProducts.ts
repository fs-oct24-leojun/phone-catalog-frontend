import { Product } from '../types/Product';
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

export const getRecommendation = () => {};
