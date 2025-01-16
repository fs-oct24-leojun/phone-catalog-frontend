import './FavouritesPage.scss';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard.tsx';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/Product.ts';

export const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    setFavourites(favourites);
  }, [favourites]);

  return (
    <div className="favourites-page">
      <section className="routing-section">
        <Link to="/">
          <i
            className="fa-solid fa-house"
            style={{ color: '#0F0F11' }}
          />
        </Link>
        <i className="button__icon fa-solid fa-angle-right" />
        <a className="routing-section__text">Favourites</a>
      </section>
      <section className="hero-section">
        <h1 className="hero-section__title headline--1">Favourites</h1>
        <p className="hero-section__text">{favourites.length} items</p>
      </section>
      <section className="items-section">
        <div className="items-section__container container">
          {favourites.length ?
            favourites.map((product: Product) => (
              <div
                className="items-section__item"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
            : <h1>Favourites is empty</h1>}
        </div>
      </section>
    </div>
  );
};
