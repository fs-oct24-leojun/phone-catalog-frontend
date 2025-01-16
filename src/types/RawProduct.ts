import { Info } from "./Info";

export interface RawProduct {
    id: number | string;
    category: string;
    name: string;
    year: number;
    image: string;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    namespaceId?: string;
    images?: string[]
    itemId?: string;
    fullPrice?: number;
    price?: number;
    priceRegular?: number,
    priceDiscount?: number,
    capacityAvailable?: Info[],
    colorsAvailable?: Info[],
    description?: Info[],
    resolution?: string,
    processor?: string,
    camera?: string,
    zoom?: string,
    cell?: string,
}