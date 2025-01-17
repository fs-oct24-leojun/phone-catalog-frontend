import { Product } from "../types/Product";

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
  case 'Price: Low to High':
    sorted.sort((a, b) => a.priceRegular - b.priceRegular);
    break;
  case 'Price: High to Low':
    sorted.sort((a, b) => b.priceRegular - a.priceRegular);
    break;
  case 'Newest':
    sorted.sort((a, b) => b.year - a.year);
    break;
  case 'Oldest':
    sorted.sort((a, b) => a.year - b.year);
    break;
  default:
    break;
  }

  return sorted;
};