import { Product } from '../types/Product';
import { RawProduct } from '../types/rawProduct';
import { ProductExtended } from '../types/ProductsExtended';
import { Slide } from '../types/Slides';
import { formatProduct } from './formatProducts';

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
    .then((products: RawProduct[]) => products.map(product => formatProduct(product)));
}

export async function getProductsById(itemId: string | undefined, category: string | undefined): Promise<ProductExtended[]> {
  return wait(500)
    .then(() => fetch(API_URL + `${category}.json`))
    .then((response) => response.json())
    .then((products: RawProduct[]) => {
      const namespaceId = products.filter((product: RawProduct) => product.id === itemId)[0].namespaceId;
      
      return products.filter((product: RawProduct) => product.namespaceId === namespaceId)
        .map(product => formatProduct(product));
    });
}
