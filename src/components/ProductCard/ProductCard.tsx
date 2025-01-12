import React, { useState } from 'react';
import './ProductCard.scss';
import { characteristics } from '../../constants/constants';
import { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, category, name, price, fullPrice, image } = product;

  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);

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
        {characteristics.map((characteristic) => (
          
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
          onClick={() => setIsInFavourite((prev) => !prev)}
          type="button"
          className={`button button-favourite button--round button--secondary ${isInFavourite && 'button-favourite--selected'}`}
        />
      </div>
    </article>
  );
};
