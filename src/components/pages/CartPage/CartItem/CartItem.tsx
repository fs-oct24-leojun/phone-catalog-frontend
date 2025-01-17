import './CartItem.scss';
// import phoneImage from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import React, { useCallback, useState } from 'react';
import { Product } from '../../../../types/Product.ts';

type Props = {
  handleDelete?: (id: string) => void;
  cart: Product;
}

export const CartItem: React.FC<Props> = ({ handleDelete, cart }) => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = useCallback((count: number) => {
    const newCount = count + 1;

    return newCount;
  }, [])

  const handleDecrement = useCallback((count: number) => {
    const newCount = count - 1;

    return newCount === 0 ? 1 : newCount;
  }, [])

  return (
    <div className="cart-item">
      <div className="cart-item__container container">
        <button
          className="cart-item__close-button"
          onClick={() => {
            if (handleDelete) {
              handleDelete(cart.id);
            }
          }}
        >
          <i
            className="fa-solid fa-xmark"
            style={{ color: '#b4bdc3' }}
          />
        </button>

        <div className="cart-item__phone-image">
          <img
            src={cart.image}
            alt={cart.name}
            className="cart-item__phone-img"
          />
        </div>

        <p className="cart-item__title">{cart.name}</p>
      </div>

      <div className="cart-item__container container">
        <div className="cart-item__counter">
          <button
            className="cart-item__button button button--round"
            onClick={() => setCounter((count) => handleDecrement(count))}
          >
            <i className="button__icon fa-solid fa-minus" />
          </button>
          <p className="cart-item__count-text">{counter}</p>
          <button
            className="cart-item__button button button--round"
            onClick={() => setCounter((count) => handleIncrement(count))}
          >
            <i
              className="button__icon fa-solid fa-plus is-active"
              style={{ color: '#0f0f11' }}
            />
          </button>
        </div>

        <p className="cart-item__price">${cart.priceRegular}</p>
      </div>
    </div>
  );
};
