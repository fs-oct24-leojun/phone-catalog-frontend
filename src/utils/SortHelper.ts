import { Product } from '../types/Product';
import { SortTypes } from '../types/SortTypes';

export const sortProducts = (
  products: Product[],
  sortBy: SortTypes,
  query: string = '',
): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
  case SortTypes.PRICE_LOW_HIGH:
    sorted.sort((a, b) => a.priceRegular - b.priceRegular);
    break;
  case SortTypes.PRICE_HIGH_LOW:
    sorted.sort((a, b) => b.priceRegular - a.priceRegular);
    break;
  case SortTypes.NEWEST:
    sorted.sort((a, b) => b.year - a.year);
    break;
  case SortTypes.OLDEST:
    sorted.sort((a, b) => a.year - b.year);
    break;
  default:
    break;
  }

  return query ?
    sorted.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    )
    : sorted;
};
