import React from 'react';
import './OrderItem.scss';

type OrderItemProps = {
  orderSuccess: string;
  orderNumber: string;
  title: string;
  otherProducts?: string[];
  price: string;
};

export const OrderItem: React.FC<OrderItemProps> = ({
  orderSuccess,
  orderNumber,
  title,
  otherProducts = [],
  price,
}) => {
  return (
    <div className="order-item">
      <div className="order-item__container container">
        <div className="order-item__success">{orderSuccess}</div>
        <div className="order-item__namespase">Order</div>
        <div>{orderNumber}</div>
        <p className="order-item__title">{title}</p>
      </div>
      <div className="order-item__container container">
        <div className="dropdown">
          <div
            className={`dropdown__label ${otherProducts.length > 0 ? 'visible' : ''}`}
          >
            + {otherProducts.length} other products
          </div>
          <div
            className="dropdown__menu"
            style={{visibility: otherProducts.length > 0 ? 'visible' : 'hidden',}}
          >
            {otherProducts.map((product, index) => (
              <p
                key={index}
                className="dropdown__item-order"
              >
                {product}
              </p>
            ))}
          </div>
        </div>
        <p className="order-item__price">{price}</p>
      </div>
    </div>
  );
};
