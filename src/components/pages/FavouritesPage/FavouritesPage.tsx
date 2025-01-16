import './FavouritesPage.scss';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard.tsx';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/Product.ts';
import { EmptyFavouritesPage } from './EmptyFavouritesPage/EmptyFavouritesPage.tsx';

export const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  const handleDeleteFavourites = (id: string) => {
    setFavourites(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const handleFavouritesChange = () => {
    const rawFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    
    setFavourites(rawFavourites);
  };

  useEffect(() => {
    handleFavouritesChange();
  }, []);

  return (
    <div className="favourites-page">

      {favourites.length ? (
        <>
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
              {favourites.map((product: Product) => (
                <div
                  className="items-section__item"
                  key={product.id}
                >
                  <ProductCard product={product} handleDelete={handleDeleteFavourites}/>
                </div>
              ))}
            </div>
          </section>
        </>
         
      ) : (
        <EmptyFavouritesPage />
      )}

    </div>
  );
};
