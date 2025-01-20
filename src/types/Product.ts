export interface Product {
  id: string;
  category: string;
  name: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  priceRegular: number;
  priceDiscount: number;
  specifications: {
    [key: string]: string | string[];
  };
}
