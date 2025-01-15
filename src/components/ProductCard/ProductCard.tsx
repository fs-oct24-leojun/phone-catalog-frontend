import React, { useEffect, useState } from 'react';
import './ProductCard.scss';
import { CHARACTERISTICS } from '../../constants/constants';
import { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, category, name, price, fullPrice, image } = product;

  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const isFavourite = favourites.some(
      (item: Product) => item.id === product.id,
    );

    setIsInFavourite(isFavourite);
  }, [product.id]);

  const handleClickFavourite = () => {
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    setIsInFavourite(favourites.some((product: Product) => product.id === id));

    const isFavourite = favourites.some(
      (item: Product) => item.id === product.id,
    );

    if (isFavourite) {
      favourites = favourites.filter((item: Product) => item.id !== product.id);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setIsInFavourite(false);
    } else {
      favourites.push(product);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setIsInFavourite(true);
    }
  };

  return (
    <article className={`product-card product-card_${id}`}>
      <img
        src={image}
        alt={`${category}_image`}
        className="product-card__image"
      />

      <p className="product-card__title">{name}</p>

      <div className="product-card__price">
        <p className="product-card__actual-price headline--3">{`$${price}`}</p>
        {fullPrice !== price && (
          <p className="product-card__full-price headline--3">{`$${fullPrice}`}</p>
        )}
      </div>

      <div className="product-card__characteristics">
        {CHARACTERISTICS.map((characteristic) => (
          <div
            className="product-card__characteristic"
            key={`characteristics_${id}_${characteristic}`}
          >
            <span className="product-card__characteristic-name small-text">
              {characteristic}
            </span>
            <span className="product-card__characteristic-value small-text">
              {product[characteristic.toLowerCase() as keyof Product]}
            </span>
          </div>
        ))}
      </div>

      <div className="product-card__buttons">
        <button
          onClick={() => setIsInCart((prev) => !prev)}
          type="button"
          className={`button button--primary button-add ${isInCart && 'button--primary--selected'}`}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </button>

        <button
          onClick={handleClickFavourite}
          type="button"
          className={`button button-favourite button--round button--secondary ${isInFavourite && 'button-favourite--selected'}`}
        />
      </div>
    </article>
  );
};
