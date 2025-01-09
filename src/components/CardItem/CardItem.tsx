import './CardItem.scss';
import phoneImage from '/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import React from 'react';

export const CardItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__section">
        <button className="cart-item__close-button">
          <i className="fa-solid fa-xmark" style={{ color: '#b4bdc3' }} />
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

      <div className="cart-item__section">
        <div className="cart-item__counter">
          <button className="cart-item__button button--round">
            <i className="fa-solid fa-minus" style={{ color: '#b4bdc3' }} />
          </button>
          <p className="cart-item__count-text">1</p>
          <button className="cart-item__button button--round">
            <i className="fa-solid fa-plus is-active" style={{ color: '#0f0f11' }} />
          </button>
        </div>

        <p className="cart-item__price">$1099</p>
      </div>
    </div>
  );
}
