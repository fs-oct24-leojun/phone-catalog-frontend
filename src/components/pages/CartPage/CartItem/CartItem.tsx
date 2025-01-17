import './CartItem.scss';
// import phoneImage from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import React, { useEffect, useState } from 'react';
import { CartProduct } from '../../../../types/CartProduct.ts';

type Props = {
  handleDelete?: (id: string) => void;
  updateCounter: (id: string, quantity: number) => void;
  cart: CartProduct;
}

export const CartItem: React.FC<Props> = ({
  handleDelete, cart, updateCounter 
}) => {
  const [counter, setCounter] = useState(cart.quantity);
  
  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  }

  const handleDecrement = () => {
    setCounter(prev => (prev <= 1 ? 1 : prev - 1));
  }

  useEffect(() => {
    if (counter !== cart.quantity) {
      updateCounter(cart.id, counter);
    }
  }, [counter, cart.id, cart.quantity, updateCounter]);

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
            className="cart-item__button button button--round button--secondary"
            onClick={handleDecrement}
          >
            <i className="button__icon fa-solid fa-minus" />
          </button>
          <p className="cart-item__count-text">{counter}</p>
          <button
            className="cart-item__button button button--round button--secondary"
            onClick={handleIncrement}
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
