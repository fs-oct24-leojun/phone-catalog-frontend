import { Info } from './Info';

export interface RawProduct {
  id: number | string;
  category: string;
  name: string;
  year: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  image?: string;
  itemId?: string;
  namespaceId?: string;
  images?: string[];
  fullPrice?: number;
  price?: number;
  priceRegular?: number;
  priceDiscount?: number;
  capacityAvailable?: Info[];
  colorsAvailable?: Info[];
  description?: Info[];
  resolution?: string;
  processor?: string;
  camera?: string;
  zoom?: string;
  cell?: string;
}
