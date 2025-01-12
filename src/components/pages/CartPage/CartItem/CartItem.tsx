import './CartItem.scss';
import phoneImage from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import React, { useCallback, useState } from 'react';

export const CartItem: React.FC = () => {
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
        <button className="cart-item__close-button">
          <i
            className="fa-solid fa-xmark"
            style={{ color: '#b4bdc3' }}
          />
        </button>

        <div className="cart-item__phone-image">
          <img
            src={phoneImage}
            alt="Apple iPhone 11 Pro Max 64GB Gold"
            className="cart-item__phone-img"
          />
        </div>

        <p className="cart-item__title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <div className="cart-item__container container">
        <div className="cart-item__counter">
          <button
            className="cart-item__button button button--round"
            onClick={() => setCounter(count => handleDecrement(count))}
          >
            <i className="button__icon fa-solid fa-minus" />
          </button>
          <p className="cart-item__count-text">{counter}</p>
          <button
            className="cart-item__button button button--round"
            onClick={() => setCounter(count => handleIncrement(count))}
          >
            <i
              className="button__icon fa-solid fa-plus is-active"
              style={{ color: '#0f0f11' }}
            />
          </button>
        </div>

        <p className="cart-item__price">$1099</p>
      </div>
    </div>
  );
};
