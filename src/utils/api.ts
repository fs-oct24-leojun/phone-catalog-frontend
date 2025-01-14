import { Product } from '../types/Product';
import { Slide } from '../types/Slides';

const API_URL = 'api/';

const SLIDES_URL = 'homepage_slides.json';
const PRODUCTS_URL = 'products.json';

// TO DO: create loader and test it with this fictional delay

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getHomeSlides(): Promise<Slide[]> {
  return wait(500)
    .then(() => fetch(API_URL + SLIDES_URL))
    .then((response) => response.json());
}

export async function getProducts(): Promise<Product[]> {
  return wait(500)
    .then(() => fetch(API_URL + PRODUCTS_URL))
    .then((response) => response.json());
}
