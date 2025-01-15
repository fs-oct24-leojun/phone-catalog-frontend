import { Product } from '../types/Product';
import { RawProducts } from '../types/rawProduct';
import { ProductExtended } from '../types/ProductsExtended';
import { Slide } from '../types/Slides';

const API_URL = '/api/';

const SLIDES_URL = 'homepage_slides.json';
const PRODUCTS_URL = 'products.json';

// TO DO: create loader and test it with this fictional delay

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getHomeSlides(): Promise<Slide[]> {
  return wait(500)
    .then(() => fetch(API_URL + SLIDES_URL))
    .then((response) => response.json())
}

export async function getProducts(): Promise<Product[]> {
  return wait(500)
    .then(() => fetch(API_URL + PRODUCTS_URL))
    .then((response) => response.json())
    .then((products: RawProducts[]) => products.map(({ price, fullPrice, ...rest}: RawProducts) => ({ ...rest, priceDiscount: price, priceRegular: fullPrice, specifications: {
      screen: rest.screen,
      ram: rest.ram,
      capacity: rest.capacity,
    }} as Product)))
}

export async function getProductById(itemId: string | undefined, category: string | undefined): Promise<ProductExtended> {
  return wait(500)
    .then(() => fetch(API_URL + category + '.json'))
    .then((response): Promise<ProductExtended[]> => response.json())
    .then((products: ProductExtended[]) => products.filter((product: ProductExtended) => product.id === itemId)[0]);
}
