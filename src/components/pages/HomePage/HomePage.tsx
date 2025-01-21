import './HomePage.scss';
import CategoryPhones from '/img/category/category-phones.png';
import CategoryTablets from '/img/category/category-tablets.png';
import CategoryAccessories from '/img/category/category-accessories.png';
import { BannerSlider } from './BannerSlider/BannerSlider';
import { ProductSlider } from '../../ProductSlider/ProductSlider';
import {
  useState, useEffect, useMemo, useContext 
} from 'react';
import * as utils from '../../../utils/apiHelper';
import * as filters from '../../../utils/filterProductsHelper';
import { Slide } from '../../../types/Slides';
import { Product } from '../../../types/Product';
import { Link } from 'react-router-dom';
import { NotificationContext } from '../../../context/NotificationContext';

export const HomePage: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    utils
      .getHomeSlides()
      .then(setSlides)
      .catch((error) => showNotification(error.message, 'error'));

    utils
      .getProducts()
      .then(setProducts)
      .catch((error) => showNotification(error.message, 'error'));
  }, [showNotification]);

  const brandNewModels = useMemo(
    () => filters.getNewestModels(products),
    [products],
  );
  const hotPricesModels = useMemo(
    () => filters.getHotPrices(products),
    [products],
  );

  console.log(products);

  return (
    <div className="home-page">
      <section className="hero-section section">
        <h1 className="hero-section__title headline--1">
          Welcome to Nice Gadgets store!
        </h1>
        <BannerSlider
          slides={slides}
          slidesPerScreen={1}
        />
      </section>
      <section className="new-models-section section">
        <ProductSlider
          products={brandNewModels}
          productsPerScreen={4}
          headline={'Brand new models'}
        />
      </section>
      <section className="categories-section section">
        <h2 className="categories-section__title headline--2">
          Shop by category
        </h2>
        <div className="categories-section__container container">
          <article className="categories-section__category category">
            <div className="category__photo">
              <Link
                to="catalog/phones"
                className="category__link"
              >
                <img
                  className="category__img"
                  src={CategoryPhones}
                  alt="Phones"
                />
              </Link>
            </div>

            <div className="category__texts">
              <h3>Mobile phones</h3>
              <p className="category__text">95 models</p>
            </div>
          </article>
          <article className="category">
            <div className="category__photo">
              <Link
                to="catalog/tablets"
                className="category__link"
              >
                <img
                  className="category__img"
                  src={CategoryTablets}
                  alt="Tablets"
                />
              </Link>
            </div>

            <div className="category__texts">
              <h3>Tablets</h3>
              <p className="category__text">24 models</p>
            </div>
          </article>
          <article className="category">
            <div className="category__photo">
              <Link
                to="catalog/accessories"
                className="category__link"
              >
                <img
                  className="category__img"
                  src={CategoryAccessories}
                  alt="Accessories"
                />
              </Link>
            </div>

            <div className="category__texts">
              <h3>Accessories</h3>
              <p className="category__text">100 models</p>
            </div>
          </article>
        </div>
      </section>
      <section className="hot-prices-section section">
        <ProductSlider
          products={hotPricesModels}
          productsPerScreen={4}
          headline={'Hot prices'}
        />
      </section>
    </div>
  );
};
