import { Product } from "./Product";
import { Info } from "./Info";

export interface ProductExtended extends Product {
    // priceRegular: number,
    // priceDiscount: number,
    namespaceId: string;
    images: string[],
    capacityAvailable: string[],
    colorsAvailable: string[],
    description: Info[],
    processor: string,
    resolution: string,
    camera: string,
    zoom: string,
    cell: string,
}