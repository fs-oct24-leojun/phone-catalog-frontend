export interface Product {
  id: number | string;
  category: string;
  itemId?: string;
  name: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  priceRegular: number;
  priceDiscount: number;
  specifications:
  {
    [key: string]: string
  }
};
