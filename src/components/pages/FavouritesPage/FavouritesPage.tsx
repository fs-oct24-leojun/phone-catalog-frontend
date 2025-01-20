import './FavouritesPage.scss';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../ProductCard/ProductCard.tsx';
import { Product } from '../../../types/Product.ts';
import { EmptyFavouritesPage } from '../ServicePages/EmptyFavouritesPage/EmptyFavouritesPage.tsx';
import { Back } from '../../Back/Back.tsx';
import { Crisps } from '../../Crisps/Crisps.tsx';

export const FavouritesPage: React.FC = () => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const handleFavouritesChange = () => {
      const rawFavourites = JSON.parse(
        localStorage.getItem('favourites') || '[]',
      );

      setFavourites(rawFavourites);
    };

    handleFavouritesChange();

    window.addEventListener('localStorageUpdated', handleFavouritesChange);

    return () =>
      window.removeEventListener('localStorageUpdated', handleFavouritesChange);
  }, []);

  return (
    <div className="favourites-page">
      <Crisps />
      <Back />
      {favourites.length ?
        <>
          <section className="favourites-page__headline-block headline-block">
            <h1 className="headline-block__headline headline headline--1">
              Favourites
            </h1>
            <p className="headline-block__subtitle ">
              {favourites.length} items
            </p>
          </section>
          <section className="items-section">
            <div className="items-section__container container">
              {favourites.map((product: Product) => (
                <div
                  className="items-section__item"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </>
        : <EmptyFavouritesPage />}
    </div>
  );
};
