import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { Product } from '../../types/Product';


type Props = {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);

  return (
    <Link to={`/${product.category}/${product.itemId}`} replace>
      <article className={`product-card product-card_${product.id}`}>
      
        <img
          src={`/${product.image}`}
          alt={`${product.category}_image`}
          className="product-card__image"
        />

        <p className="product-card__title">{product.name}</p>

        <div className="product-card__price">
          <p className="product-card__actual-price headline--3">{`$${product.priceRegular}`}</p>
          {product.priceRegular !== product.priceDiscount && (
            <p className="product-card__full-price headline--3">{`$${product.priceDiscount}`}</p>
          )}
        </div>

        <div className="product-card__characteristics">

          {Object.keys(product.specifications).map(specs => (
            <div
              className="product-card__characteristic"
              key={`characteristics_${product.id}_${specs}`}
            >
              <span className="product-card__characteristic-name small-text">
                {specs}
              </span>
              <span className="product-card__characteristic-value small-text">
                {product.specifications[specs]}
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
    </Link>
  );
};
