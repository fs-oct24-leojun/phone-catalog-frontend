
import React, { useState } from "react";
import './ProductCard.scss'
import { shownProductCardCharacteristics } from "../../constants/constants";
import { Product } from "../../types/Product";

interface Props {
  product: Product;
  isInCart: boolean;
  isInFavourite: boolean;
}

export const ProductCard: React.FC<Props> = ({
  product,
}) => {
  const { id, category, name, price, fullPrice, image } = product;
  
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavourite, setIsInFavourite] = useState(false);


  return (
    <article className="product-card">
      <img
        src={image}
        alt={`${category}_image`}
        className="product-card__image"
      />

      <p className="product-card__title">{name}</p>

      <div className="product-card__price">
        <p className="product-card__actual-price h3">{`$${price}`}</p>
        {fullPrice !== price && (
          <p className="product-card__full-price h3">{`$${fullPrice}`}</p>
        )}
      </div>

      <div className="product-card__characteristics">
        {shownProductCardCharacteristics.map((characteristic) => (
          <p className="product-card__characteristic" key={id}>
            <span className="product-card__characteristic-name small-text">
              {characteristic}
            </span>
            <span className="product-card__characteristic-value small-text">
              {product[characteristic.toLowerCase() as keyof Product]}
            </span>
          </p>
        ))}
      </div>

      <div className="product-card__buttons">
        <button
          onClick={() => setIsInCart((prev) => !prev)}
          type="button"
          className={`button button-add ${isInCart && 'button-add--selected'}`}>
          {isInCart ? 'Added' : 'Add to cart'}
        </button>

        <button
          onClick={() => setIsInFavourite((prev) => !prev)}
          type="button"
          className={`button button-favourite ${isInFavourite && 'button-favourite--selected'}`}
        />
      </div>
    </article>
  );
};